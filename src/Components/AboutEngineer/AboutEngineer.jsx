import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import getNavBar from '../../Hooks/useNavBar';
import AboutEngineerStyle from './AboutEngineer.module.css';
import ProfileAvatar from '../../image/ProfileAvatar.png'
import cv from '../../Pdf/CvRamiSasi.pdf'
import { Helmet } from 'react-helmet';

export default function AboutEngineer() {
  let location = useLocation();
  const NavBar = getNavBar(location.pathname);
  useEffect(() => {
    NavBar();
  }, [])
  return <>
    <Helmet>
      <title>About Engineer</title>
    </Helmet>
    <section className={AboutEngineerStyle.AboutSection}>
      <div className='container p-5'>
        <div className='row bg-light p-4 '>
          <div className="col-md-6 mt-4">
            <div className='row'>
              <div className="col-md-4 p-4">
                <div className='bg-light rounded-5'>
                  <img src={ProfileAvatar} alt="" className='w-100 ' />
                </div>
              </div>
              <div className="col-md-8 p-2">
                <div className="row">
                  <div className="col-md-12 text-center"><p className='fs-2'>Rami Rida Abuagela</p></div>
                  <div className="col-md-6 p-0"><p>Profile: <span className='text-muted'>full stack developer</span></p></div>
                  <div className="col-md-6 p-0"><p>Living: <span className='text-muted'>Tripoli/Libya</span></p></div>

                  <div className="col-md-6 p-0"><p>Phone: <span className='text-muted'>++218914761632</span></p></div>
                  <div className="col-md-6 p-0">
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-viber px-1"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <span className='text-muted'> : ++218910095522</span>
                  </div>
                  <div className="col-md-6 p-0"><p>Email: <span className='text-muted'>ramisase@gamil.com</span></p></div>
                  <div className="col-md-6 p-0 d-flex justify-content-around">
                    <Link target='_blank' to='https://www.facebook.com/rami.abuojaylah'><i className="fa-brands fa-square-facebook"></i> </Link>
                    <Link target='_blank' to='https://www.linkedin.com/in/rami-abuagela-ba09aa14b/'><i className="fa-brands fa-linkedin"></i></Link>
                    <Link target='_blank' to='https://github.com/Ramisasi'><i className="fa-brands fa-square-github"></i></Link>
                    <Link target='_blank' to='https://twitter.com/RamiAbuagela'><i className="fa-brands fa-square-twitter"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>About Engineer</h2>
              <div className='d-flex justify-content-around mt-4'>
                <div>
                  <h5>Academic Qualification</h5>
                  <p>Bachelor of computer science</p>
                </div>
                <div>
                  <h5>Courses & Diploma</h5>
                  <p className='m-0'>Human Development</p>
                  <p>Full stack web development</p>
                </div>
              </div>
              <h5>Projects Experience</h5>
              <div className="row pe-0">
                <div className="col-md-12 text-center">
                  <p className='mb-2'>Web Application</p>
                </div>
                <div className="col-md-4 mb-2">
                  <p className='m-0 p-0'>Game over</p>
                  <span className={AboutEngineerStyle.SpanStyle}>(FrontEnd React Using Api)</span>
                </div>
                <div className="col-md-4 mb-2">
                  <p className='m-0'>Yummy</p>
                  <span className={AboutEngineerStyle.SpanStyle}>(FrontEnd Js/OOP Using Api)</span>
                </div>
                <div className="col-md-4 mb-2">
                  <p className='m-0'>E-commerce Api</p>
                  <span className={AboutEngineerStyle.SpanStyle}>(BackEnd Node js Whit MongoDB)</span>
                </div>
                <div className="col-md-4 mb-2">
                  <p className='m-0'>Blog Api </p>
                  <span className={AboutEngineerStyle.SpanStyle}>(BackEnd Node js whit MongoDB)</span>
                </div>
                <div className="col-md-4 mb-2">
                  <p className='m-0'> Massage Api </p>
                  <span className={AboutEngineerStyle.SpanStyle}>(BackEnd Node js whit MongoDB)</span></div>
                <div className="col-md-4 mb-2">
                  <p className='m-0'>Posts Api</p>
                  <span className={AboutEngineerStyle.SpanStyle}>(BackEnd Node js whit MongoDB)</span>
                </div>
                <div className="col-md-12 mb-2">
                  <p className='m-0'>Arabic Center</p>
                  <span className={AboutEngineerStyle.SpanStyle}>(Full Stack PHP codeigniter whit MySQL)</span>
                </div>
              </div>

              <div className="row pe-0">
                <div className="col-md-12 text-center">
                  <p className='mb-2'>Win Application</p>
                </div>
                <div className="col-md-4 mb-2">
                  <p className='m-0 p-0'>Fast Meals System</p>
                  <span className={AboutEngineerStyle.SpanStyle}>(using C#)</span>
                </div>
                <div className="col-md-4 mb-2">
                  <p className='m-0'>Kitchen Factories System</p>
                  <span className={AboutEngineerStyle.SpanStyle}>(using C#)</span>
                </div>
                <div className="col-md-4 mb-2">
                  <p className='m-0'>Car Center System</p>
                  <span className={AboutEngineerStyle.SpanStyle}>(using C#)</span>
                </div>
                <div className="col-md-4 mb-2">
                  <p className='m-0'>Barber System</p>
                  <span className={AboutEngineerStyle.SpanStyle}>(using C#)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 px-5 py-4">
            <div className='p-4'>
              <h4>Skill</h4>
              <div className='d-flex justify-content-between mt-4'>
                <p className='m-0'>HTML5, CSS3, Bootstrap5</p>
                <p className='m-0'>90%</p>
              </div>
              <div className={AboutEngineerStyle.SkillName}>
                <div className={AboutEngineerStyle.SkillPercent} style={{ width: "90%" }}></div>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <p className='m-0'>JQuery ,JavaScript(ES6, OOP, API, JSON)</p>
                <p className='m-0'>80%</p>
              </div>
              <div className={AboutEngineerStyle.SkillName}>
                <div className={AboutEngineerStyle.SkillPercent} style={{ width: "80%" }}></div>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <p className='m-0'>Typescript</p>
                <p className='m-0'>60%</p>
              </div>
              <div className={AboutEngineerStyle.SkillName}>
                <div className={AboutEngineerStyle.SkillPercent} style={{ width: "60%" }}></div>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <p className='m-0'>SASS, SCSS</p>
                <p className='m-0'>60%</p>
              </div>
              <div className={AboutEngineerStyle.SkillName}>
                <div className={AboutEngineerStyle.SkillPercent} style={{ width: "60%" }}></div>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <p className='m-0'>React</p>
                <p className='m-0'>85%</p>
              </div>
              <div className={AboutEngineerStyle.SkillName}>
                <div className={AboutEngineerStyle.SkillPercent} style={{ width: "85%" }}></div>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <p className='m-0'>Git, GitHub</p>
                <p className='m-0'>70%</p>
              </div>
              <div className={AboutEngineerStyle.SkillName}>
                <div className={AboutEngineerStyle.SkillPercent} style={{ width: "70%" }}></div>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <p className='m-0'>Node.js, Express</p>
                <p className='m-0'>85%</p>
              </div>
              <div className={AboutEngineerStyle.SkillName}>
                <div className={AboutEngineerStyle.SkillPercent} style={{ width: "85%" }}></div>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <p className='m-0'>SQL , MySQL</p>
                <p className='m-0'>95%</p>
              </div>
              <div className={AboutEngineerStyle.SkillName}>
                <div className={AboutEngineerStyle.SkillPercent} style={{ width: "95%" }}></div>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <p className='m-0'>MongoDB</p>
                <p className='m-0'>70%</p>
              </div>
              <div className={AboutEngineerStyle.SkillName}>
                <div className={AboutEngineerStyle.SkillPercent} style={{ width: "70%" }}></div>
              </div>

            </div>
            <div className='d-flex justify-content-center'>

            </div>
            <div className='d-flex justify-content-center align-items-center flex-column mt-3'>
              <h4>Everything is different except my drive to win</h4>
              <Link target='_blank' className='w-25 text-center' to={cv} download>
                <p className='p-3 bg-info rounded-4'>Download CV</p>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
    <div className={AboutEngineerStyle.backToHome}>
      <Link to="/">
        <i className="fa-solid fa-house border-3"></i>
      </Link>
    </div>


  </>

}
