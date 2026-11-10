import React from 'react'
import '../css/contacts.css'

const contact = () => {
  return (
    <div className='form'>
      <div className='contacts'>
      <form action="" className='form1'>
        <h2>Contact Us</h2>
        <span>First Name</span><br />
        <input type="text" className='input' required/><br />
        <span>Last Name</span><br />
        <input type="text" className='input' required /><br />
        <span>Email Address</span><br />
        <input type="text" className='input'/><br />
        <span>Mobile Number</span><br />
        <input type="number" className='input' required/><br />
        <span>Your Message</span><br />
        <input type="text" className='message' /><br /><br />
        <button>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default contact