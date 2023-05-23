import React from 'react'
import { NavLink } from 'react-router-dom'
import navBarStyle from "./NavBar.module.css"
import { useDispatch } from 'react-redux'
import { logOut } from '../../Redux/userData'
import useUserData from '../../Hooks/useUserData'

export default function NavBar() {
  let dispatch = useDispatch();
  let { isLogin } = useUserData();

  return <>
    <nav id='navbar' className={`navbar navbar-expand-lg ${navBarStyle.navbar}`}>
      <div className="container">
        <NavLink className="navbar-brand text-light fs-4" to='/'>Football News</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {
            isLogin ? <ul className="navbar-nav ms-auto fs-5 ">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? `nav-link ${navBarStyle.navLinkText} active` : `nav-link ${navBarStyle.navLinkText}` } aria-current="page" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? `nav-link ${navBarStyle.navLinkText} active` : `nav-link ${navBarStyle.navLinkText}`} aria-current="page" to={'/Profile'}>Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? `nav-link ${navBarStyle.navLinkText} active` : `nav-link ${navBarStyle.navLinkText}`} aria-current="page" to={'/News'}>News</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? `nav-link ${navBarStyle.navLinkText} active` : `nav-link ${navBarStyle.navLinkText}`} aria-current="page" to='/AboutEngineer'>About Engineer</NavLink>
              </li>
            </ul> : ""
          }
          <ul className="navbar-nav ms-auto mb-lg-0">
            {
              isLogin ? <li className="nav-item">
                <span className={`nav-link ${navBarStyle.navLinkText} LogOut`} aria-current="page" id={navBarStyle.LogOut} onClick={() => dispatch(logOut())}>LogOut</span>
              </li> : <li className="nav-item">
                <NavLink className={`nav-link ${navBarStyle.navLinkText}`} aria-current="page" to='/Auth'>Auth</NavLink>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  </>
}
