import React from 'react'
import {Link} from 'react-router-dom'
import './css/dashboard.css'

function dashboard () {
  return (
    <div>
    <div className='navbarlist'>
      <Link to="/home">Sell</Link>
      <Link to="/about">History</Link>
      <Link to="/services">Repoting</Link>
      <Link to="/contacts">Products</Link>
      <Link to="/Login">Customers</Link>
      <Link to="/Login">Ecommerce</Link>
    </div>
    
    <div className='cards'>
      <div className='salescard'>
      <h3>Total Sales</h3><br />
      <h1>$1,284</h1>
      <span><strong>+30%</strong>compared to last month</span>
    </div>
    <div className='makingcard'>
      <h3>Total Making</h3><br />
      <h1>$42,215</h1>
      <span><strong>+30%</strong>Includes labour + materials</span>
    </div>
    <div className='todaysalecard'>
      <h3>Today's Sales</h3><br />
      <h1>$124</h1>
      <span><strong>+30%</strong>Since yesterday</span>
    </div>
    <div className='ordercard'>
      <h3>Order not Initiated</h3><br />
      <h1>$3842</h1>
      <span><strong>+30%</strong>drop from yesterday</span>
    </div>
    <div className='delayedcard'>
      <h3>Delayed job Orders</h3><br />
      <h1>$845.84</h1>
      <span><strong>+30%</strong>from previous weeks</span>
    </div>
    <div className='jobcard'>
      <h3>Jobs on Hold</h3><br />
      <h1>$45.82</h1>
      <span><strong>+30%</strong>from previous month</span>
    </div>
    </div>
    </div>
  )
}

export default dashboard
