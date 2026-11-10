import React from 'react'
import '../css/footer.css'
function Footer() {
  return (
    <footer className='footer'>
      <div className='footercontainer'>
        <h2>Find Your Perfect Jewellery</h2>
      <p>Discover timeless designs with personalized guidance tailored to your preferences.</p>
      <div className='mobile-button'>
        <input type="number" placeholder='Enter mobile number' className='mobileinput'/>
      <button className='requestcall'>Request Call Back</button>
      </div>
      <hr />
      </div>
      <div className='footer-top'>
      <div className='footer-box'>
        <h1 className='logo1'>KAV JEWELS</h1>
        <p>Starting its journey in 1888 with an ode to diamonds and stones that resonate with energy, strength and stability, ORRA first began operations with sourcing, manufacturing and sculpting diamonds and now retails the finest at our stores across the country.</p>
      </div>
      <div className='footer-box'>
        <h1 className='logo1'>Shop</h1>
        <ul>
          <li className='footer-list'><a href="">Rings</a></li>
          <li className='footer-list'><a href="">Earings</a></li>
          <li className='footer-list'><a href="">Nexklaces & Pendants</a></li>
          <li className='footer-list'><a href="">Diamond</a></li>
          <li className='footer-list'><a href="">Platinum</a></li>
        </ul>
      </div>
      <div className='footer-box'>
        <h1 className='logo1'>About Kav Jewels</h1>
        <ul>
          <li className='footer-list'><a href="">About Us</a></li>
          <li className='footer-list'><a href="">Find a Store</a></li>
          <li className='footer-list'><a href="">Press</a></li>
          <li className='footer-list'><a href="">Blogs</a></li>
          <li className='footer-list'><a href="">Careers</a></li>
          <li className='footer-list'><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div className='footer-box'>
        <h1 className='logo1'>Customer Service</h1>
        <ul>
          <li className='footer-list'><a href="">7 Days Return Policy</a></li>
          <li className='footer-list'><a href="">Lifetime Exchange & Buyback</a></li>
          <li className='footer-list'><a href="">Privacy Policy</a></li>
          <li className='footer-list'><a href="">Terms & Conditions</a></li>
          <li className='footer-list'><a href="">FAQ's</a></li>
        </ul>
      </div>
      <div className='footer-box'>
        <h1 className='logo1'>Conatct Us</h1>
        <ul>
          <li className='footer-list'><a href="">1800-2661888</a></li>
          <li className='footer-list'><a href="">General/Corporate - kajalarorakj3@gmail.com</a></li>
          <li className='footer-list'><a href="">Grievnce - mailto:kajalarorakj3@gmail.com</a></li>
        </ul>
        </div>
        <div>
          <p>2026 KAV JEWELS. All Rights Reserved</p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer