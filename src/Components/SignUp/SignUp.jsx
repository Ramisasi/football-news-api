import React, { useEffect, useState } from 'react'
import joi from 'joi'
import $ from 'jquery'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function SignUp() {

  let navigate = useNavigate();
  let [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    age: 0
  });
  let [loadingData, setLoadingData] = useState(false);
  function getUserData(event) {
    let newUserData = { ...userData };
    newUserData[event.target.name] = event.target.value
    setUserData(newUserData)
  }
  function checkName(value) {
    return joi.string().pattern(/^[A-Za-z]/).min(3).max(10).required().validate(value);
  }
  function checkEmail(value) {
    return joi.string().email({ tlds: { allow: ["com", "net"] } }).required().validate(value);
  }
  function checkPassword(value) {
    let strongPassword = joi.string().pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)).validate(value);
    let easyPassword = joi.string().pattern(new RegExp(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/)).validate(value);
    if (!strongPassword.error)
      return { success: "strong" }
    else if (!easyPassword.error)
      return { success: "easy" }
    else
      return { error: "not match" }
  }
  function checkAge(value) {
    return joi.number().min(18).max(80).required().validate(value);
  }
  function checkValidate(event) {
    let checkError = '';
    if (event.target.id == "first_name" || event.target.id == "last_name") {
      checkError = checkName(event.target.value)
    }
    else if (event.target.id == "email") {
      checkError = checkEmail(event.target.value)
    }
    else if (event.target.id == "password") {
      checkError = checkPassword(event.target.value)
    }
    else {
      checkError = checkAge(event.target.value)
    }
    //////
    if (checkError.error) {
      viewHideError("view", event.target.id)
      if (event.target.id == "password" && checkError.error) {
        $('#password_error').text("Password not match, Must be have uppercase, lowercase letter, number and minimum length 8")
      }
    }
    else if (event.target.id == "password" && checkError.success) {
      if (checkError.success == "strong") {
        viewHideError("strong", event.target.id)
      }
      else {
        viewHideError("easy", event.target.id)
      }
      getUserData(event)
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
    else if (type == "strong") {
      $(`#${inputDivName}_error`).addClass("d-block")
      $(`#${inputDivName}_error`).removeClass("none")
      $(`#${inputDivName}_error`).css("color", "green")
      $(`#${inputDivName}_error`).text("Strong password")
      $(`#${inputDivName}`).removeClass("is-invalid")
      $(`#${inputDivName}`).addClass("is-valid")
    }
    else if (type == "easy") {

      $(`#${inputDivName}_error`).addClass("d-block")
      $(`#${inputDivName}_error`).removeClass("none")
      $(`#${inputDivName}_error`).css("color", "yellow")
      $(`#${inputDivName}_error`).text("Easy password")
      $(`#${inputDivName}`).removeClass("is-invalid")
      $(`#${inputDivName}`).addClass("is-valid")
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
    if (userData.first_name != "" && userData.last_name != "" && userData.email != "" && userData.password != "" && userData.age > 0) {
      setLoadingData(true);
      let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signup`, userData)
      setLoadingData(false);
      if (data.errors) {
        $('#post_error').addClass("d-block")
        $('#post_error').removeClass("none")
        if (data.errors.email) {
          $('#post_error').text(data.errors.email.message)
        }
        else if (data.errors.password) {
          $('#post_error').text("password is required")
        }
      }
      else {
        $('#post_error').addClass("none")
        $('#post_error').removeClass("d-block")
        navigate("/Auth");
      }
    }
  }
  return <>
     <Helmet>
      <title>Sign Up Page</title>
    </Helmet>
    <div className='w-100'>
      <div className='text-center mb-4'>
        <h2 className='h1'>Agent login</h2>
        <p>Enter all your details to get sign up</p>
      </div>
      <form className='row' onSubmit={postData}>
        <div className="col-md-6">
          <label htmlFor="first_name">First Name:</label>
          <input onKeyDown={clearInput} onBlur={checkValidate} type="text" className='form-control mb-1' placeholder='Enter your first name' name='first_name' id='first_name' />
          <div className="invalid-feedback" id='first_name_error' >Name must be from 3 to 6 letter and no numbers</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="last_name">Last Name:</label>
          <input onKeyDown={clearInput} onBlur={checkValidate} type="text" className='form-control mb-1' placeholder='Enter your last name' name='last_name' id='last_name' />
          <div className="invalid-feedback" id='last_name_error'>Name must be from 3 to 6 letter and no numbers</div>
        </div>
        <div className='col-md-12'>
          <label htmlFor="email">Email:</label>
          <input onKeyDown={clearInput} onBlur={checkValidate} type="text" className='form-control mb-1 ' placeholder='Enter your Email' name='email' id='email' />
          <div className="invalid-feedback" id='email_error'>Email must be exist and be actual</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="Password">Password:</label>
          <input onKeyDown={clearInput} onBlur={checkValidate} type="password" className='form-control mb-1 ' placeholder='Enter your Password' name='password' id='password' />
          <div className="invalid-feedback" id='password_error'></div>
        </div>
        <div className="col-md-6">
          <label htmlFor="age">Age:</label>
          <input onKeyDown={clearInput} onBlur={checkValidate} type="number" className='form-control mb-1 ' placeholder='Enter your Age' name='age' id='age' min="18" max='80' />
          <div className="invalid-feedback" id='age_error'>Your age must be between 18 to 80 years old</div>
        </div>

        <div className="invalid-feedback" id='post_error'></div>
        <div className='mt-3 text-center'>
          {
            loadingData == false ?
              <>
                <button type='submit' onClick={postData} className='btn btn-outline-light px-5 py-2'>Sing Up</button>
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
