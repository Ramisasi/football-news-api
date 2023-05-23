import React, { useState } from 'react'
import joi from 'joi'
import $ from 'jquery'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUserTokening } from '../../Redux/userData';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

export default function SignIn() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  let [loadingData, setLoadingData] = useState(false);
  function getUserData(event) {
    let newUserData = { ...userData };
    newUserData[event.target.name] = event.target.value
    setUserData(newUserData)
  }
  function checkEmail(value) {
    return joi.string().email({ tlds: { allow: ["com", "net"] } }).required().validate(value);
  }
  function checkPassword(value) {
    let strongPassword = joi.string().pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)).validate(value);
    let easyPassword = joi.string().pattern(new RegExp(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/)).validate(value);
    if (!strongPassword.error)
      return { success: "match" }
    else if (!easyPassword.error)
      return { success: "match" }
    else
      return { error: "not match" }
  }

  function checkValidate(event) {
    let checkError = '';
    if (event.target.id == "email") {
      checkError = checkEmail(event.target.value)
    }
    else {
      checkError = checkPassword(event.target.value)
    }
    //////
    if (checkError.error) {
      viewHideError("view", event.target.id)
      if (event.target.id == "password" && checkError.error) {
        $('#password_error').text("Password not match, Must be have uppercase, lowercase letter, number and minimum length 8")
      }
    }
    else {
      viewHideError("hide", event.target.id)
      getUserData(event)
    }
  }
  function viewHideError(type, inputDivName) {
    if (type == "view") {
      $(`#${inputDivName}_error`).addClass("d-block")
      $(`#${inputDivName}_error`).removeClass("none")
      $(`#${inputDivName}`).addClass("is-invalid")
      $(`#${inputDivName}`).removeClass("is-valid")
    }
    else if (type == "hide") {
      $(`#${inputDivName}_error`).removeClass("d-block")
      $(`#${inputDivName}_error`).addClass("none")
      $(`#${inputDivName}`).removeClass("is-invalid")
      $(`#${inputDivName}`).addClass("is-valid")
    }
    else {
      $("input").removeClass("is-valid")
      $("input").removeClass("is-invalid")
      $(".invalid-feedback").removeClass("d-block")
      $(".invalid-feedback").addClass("none")
    }
  }
  function clearInput(event) {
    if (event.key == 'Backspace') {
      let newUserData = { ...userData };
      newUserData[event.target.name] = ''
      setUserData(newUserData)
    }
  }
  async function postData(event) {
    event.preventDefault();
    if (userData.email != "" && userData.password != "") {
      setLoadingData(true);
      let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signin`, userData)
      setLoadingData(false);

      if (data.status == 401) {
        $('#post_error').addClass("d-block")
        $('#post_error').removeClass("none")
        if (data.message) {
          $('#post_error').text(data.message)
        }
      }
      else {
        $('#post_error').addClass("none")
        $('#post_error').removeClass("d-block")
        localStorage.setItem("userToken", data.token)
        dispatch(getUserTokening());
        navigate("/");
      }
    }
  }
  return <>
   <Helmet>
      <title>Sign In Page</title>
    </Helmet>
    <div className='w-100 d-flex flex-column align-items-center'>
      <div className='text-center mb-4'>
        <h2 className='h1'>Agent login</h2>
        <p>Enter all your details to get sign up</p>
      </div>
      <form className='row w-75' onSubmit={postData}>
        <div className='col-md-12'>
          <label htmlFor="email">Email:</label>
          <input onKeyDown={clearInput} onBlur={checkValidate} type="text" className='form-control mb-1 ' placeholder='Enter your Email' name='email' id='email' />
          <div className="invalid-feedback" id='email_error'>Email must be exist and be actual</div>
        </div>
        <div className="col-md-12">
          <label htmlFor="Password">Password:</label>
          <input onKeyDown={clearInput} onBlur={checkValidate} type="password" className='form-control mb-1 ' placeholder='Enter your Password' name='password' id='password' />
          <div className="invalid-feedback" id='password_error'></div>
        </div>
        <div className="invalid-feedback" id='post_error'></div>
        <div className='mt-3 text-center'>
          {
            loadingData == false ?
              <>
                <button type='submit' onClick={postData} className='btn btn-outline-light px-5 py-2'>Sing In</button>
                <button type='submit' onClick={() => {
                  viewHideError("clear")
                }} className='btn btn-outline-warning ms-2 px-2 py-2'>Clear</button>
              </>
              : <button className='btn btn-outline-light px-5 py-2'><i className="fa-solid fa-spinner"></i></button>
          }
        </div>
      </form>
    </div>
  </>
}
