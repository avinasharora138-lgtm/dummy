import React from 'react'
import '../css/navbars.css'
import {Link} from 'react-router-dom'
function Navbars() {
  return (
    // KAV JEWELS WEBSITE

    // <div className='navbarlist'>
    //   <span className='logo'>KAV JEWELS</span>
    //   <Link to="/home">Home</Link>
    //   <Link to="/about">About</Link>
    //   <Link to="/services">Services</Link>
    //   <Link to="/contacts">Contact</Link>
    //   <Link to="/Login">Login</Link>
    //   <input type="text" className='searchbutton' placeholder='Search here'/>
    // </div>

    // ASSIGNMENT TASK
    <div className='taskmanager'>
      <h1>Task Manager</h1>
      <div className='links'>
        <Link to="home">Home</Link>
        <Link to="tasks">My Tasks</Link>
      </div>
    </div>
  )
}

export default Navbars