import React from 'react'
import logo from '../../img/logo.svg';

function Navbar() {
  return (
    <div className='navbar'>
        <nav className="navbar sticky-top navbar-light bg-light px-4 ">
        <div className="container-fluid ">
            <a className="navbar-brand" href="/">
            <img src={logo} alt=""  height="50" className="d-inline-block align-text-top"/>
            </a>
            <a className='logo' href="/">
               <span className='navbar-brand title'>newwood</span>
            </a>
        </div>
        </nav>
    </div>
  )
}

export default Navbar