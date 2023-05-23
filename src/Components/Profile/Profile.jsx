import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import profileStyle from './Profile.module.css'
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import getNavBar from '../../Hooks/useNavBar';
import ProfileAvatar from '../../image/ProfileAvatar.png'
import $, { event } from 'jquery'
import axios from 'axios';

export default function Profile() {
  const { first_name, last_name, email, age, _id } = useSelector((state) => state.user)
  let getToken = localStorage.getItem("userToken");
  const [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  const NavBar = getNavBar(location.pathname);
  const [allNotes, setAllNotes] = useState([]);
  let desc = useRef();
  let title = useRef();
  let idNote = '';
  let indexNote = -1;

  async function PostData(event) {
    event.preventDefault();
    if (idNote == '') {
      if (checkInputData()) {
        if (getToken) {
          let NotesData = { title: title.current.value, desc: desc.current.value, token: getToken };
          let { data } = await axios.post('https://sticky-note-fe.vercel.app/addNote', NotesData);
          if (data.message == "success") {
            getAllNotes();
            clearText();
          }
        }
      }
    }
  }
  async function getAllNotes() {
    if (getToken) {
      const userData = { token: getToken }
      let { data } = await axios.post("https://sticky-note-fe.vercel.app/getUserNotes", userData)
      if (data.message == "success") {
        setAllNotes(data.Notes.reverse())
      }
    }
  }
  function clearText() {
    title.current.value = "";
    desc.current.value = ""
    $(title.current).removeClass("is-valid", "is-invalid");
    $(desc.current).removeClass("is-valid", "is-invalid");
    idNote = "";
    indexNote = -1;
    hideChooseNote();
  }
  function checkInputData() {
    if (!title.current.value && desc.current.value) {
      $(title.current).removeClass("is-valid").addClass("is-invalid")
      $(desc.current).removeClass("is-invalid").addClass("is-valid")
      return false
    }
    else if (!desc.current.value && title.current.value) {
      $(desc.current).removeClass("is-valid").addClass("is-invalid")
      $(title.current).removeClass("is-invalid").addClass("is-valid")
      return false
    }
    else if (!title.current.value && !desc.current.value) {
      $(title.current).removeClass("is-valid").addClass("is-invalid")
      $(desc.current).removeClass("is-valid").addClass("is-invalid")
      return false
    }
    else {
      $(title.current).removeClass("is-invalid").addClass("is-valid")
      $(desc.current).removeClass("is-invalid").addClass("is-valid")
      return true
    }
  }
  function getNoteDetails(event, id) {
    if (event.target.localName != "button") {
      idNote = id
      title.current.value = $(`#${id}`).children("h5").text();
      desc.current.value = $(`#${id}`).children("p").text();
      hideChooseNote();
    }
  }
  function hideChooseNote() {
    $("#chooseNote").css({ "top": "-50px" })
  }
  async function updateNote(event) {
    event.preventDefault();
    if (idNote && checkInputData() && getToken) {
      let NotesData = { title: title.current.value, desc: desc.current.value, token: getToken, NoteID: idNote };
      let { data } = await axios.put('https://sticky-note-fe.vercel.app/updateNote', NotesData);
      if (data.message == "updated") {
        getAllNotes();
        clearText();
      }
      console.log(data);
    } else {
      $("#chooseNote").css({ "top": "0px" })
    }
  }
  async function deleteNote(id, index) {
    if (getToken) {
      let data = { NoteID: id, token: getToken };
      let request = await axios.delete('https://sticky-note-fe.vercel.app/deleteNote', { data })
      if (request?.data?.message == "deleted") {
        let deleteNoteFromArray = [...allNotes]
        deleteNoteFromArray.splice(index, 1)
        setAllNotes(deleteNoteFromArray);
      }
    }

  }
  function clickHandler() {
    searchParams.set("", _id);
    setSearchParams(searchParams);
  };
  useEffect(() => {
    NavBar();
    clickHandler();
    getAllNotes();
  }, [])
  return <>
    <Helmet>
      <title>{first_name} {last_name} Profile</title>
    </Helmet>
    <section className={`${profileStyle.profile} container`}>
      <div className='row mt-5 pt-4 mb-1'>
        <div className="col-md-3 bg-light pt-2 ps-0 pe-0 pb-5 d-flex flex-column align-items-center justify-content-center">
          <div className={profileStyle.imageDiv}>
            <img src={ProfileAvatar} className='w-100' alt="" />
          </div>
          <div className='mt-4 w-100 p-4' id={profileStyle.pLine}>
            <p>First Name: <span>{first_name}</span></p>
            <p>last Name: <span>{last_name}</span></p>
            <p>Email: <span>{email}</span></p>
            <p>Age: <span>{age}</span></p>
          </div>
        </div>
        <div className={`col-md-9 ${profileStyle.notesDiv}`}>
          <div className="row align-items-center p-3">
            <form className={`col-md-5 py-5 px-3 ${profileStyle.Medial}`} onSubmit={PostData}>
              <div className='text-center'>
                <h4 className='fs-1'>Note Details</h4>
              </div>
              <div className='mt-4'>
                <div>
                  <label htmlFor="title">Title</label>
                  <input className='form-control' type="text" ref={title} id='title' />
                  <div className="invalid-feedback" id='title_error'>Title must be exist</div>
                </div>
                <div>
                  <label htmlFor="desc" className='mt-3'>Description</label>
                  <textarea className='form-control max' ref={desc} fef='desc' cols="30" rows="5"></textarea>
                  <div className="invalid-feedback" id='email_error'>Description must be exist</div>
                </div>

              </div>
              <div className='mt-4 text-center'>
                <button className='btn btn-success px-4 m-3'>Add</button>
                <button className='btn btn-warning px-3 m-3' onClick={updateNote}>Update</button>
              </div>
            </form>
            <div className='py-3 px-3 col-md-7 position-relative overflow-hidden'>
              <div className={`${profileStyle.chooseNote}`} id="chooseNote">
                <p className='my-0 mx-3'>You must be choose note from list</p>
                <i className="fa-solid fa-hand-point-down"></i>
              </div>
              <div className={`${profileStyle.viewNotes}`}>
                {
                  allNotes.map((note, index) =>
                    <div key={index} id={note._id} onDoubleClick={(event) => getNoteDetails(event, note._id, index)} className='bg-light mb-3 p-3 position-relative'>
                      <h5 className='h1'>{note.title}</h5>
                      <p>{note.desc}</p>
                      <button className={profileStyle.viewNotesButton} onClick={() => deleteNote(note._id, index)}>Delete</button>
                    </div>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
