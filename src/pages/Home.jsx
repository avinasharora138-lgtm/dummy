import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (

    // KAV JEWELS WEBSITE
    // <div className='homepagedesign'>
    // <div></div>
    
    //     <h1 className='headinghomepage'>Luxury Designed Jewellery</h1>
    //     <p className='parahomepage'>Handcrafted fine jewellery designed to celebrate your everyday moments and milestone memories. It has been designed by master jewellers who obsess over every minor details. We believe that jewellery is more than just an accessory - it is an extension of who you are, a keeper of memories, and a reflection of your personal journey.</p>
    //     <div className='center'><button className='buttoncollection'>Explore Collections</button>
    //     </div>
    //     <div className='center'><img src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw7f645c28/Top%2010%20Design%20Inspiration%20for%20Bridal%20Jewellery%20Necklace,%20Bracelet%20and%20More_D.jpg" alt="" />
    // </div>
    // <div className='shop'>
    //   <h1>Shop by Categories</h1>
    //   <p>Find your perfect sparkle across every category</p>
    //   <div className='ring'>
    //     <div className='ringcontent'>
    //     <h1>Rings</h1>
    //     <p>Explore</p>
    //     </div>
    //   </div>
    // </div>
    // </div>

    // ASSIGNMENT TASK

    <div className='welcome'>
      <h1>Welcome to the Task Management</h1>
      <p>Task management is the systematic process of planning, prioritizing, organizing, and tracking work activities from start to finish. By breaking larger goals into smaller, actionable steps and assigning clear ownership, it reduces mental clutter and prevents missed deadlines. Whether using simple to-do lists, digital apps, or Kanban boards, effective task management ensures that daily efforts align with broader team and personal objectives. Ultimately, it turns chaos into clarity, boosts productivity, and keeps projects moving smoothly.</p>
      <Link to="tasks" className='visitbutton'>Visit here</Link>

      <div className='addcontainer'>
        <div className='addmain'>
          <h2>Add</h2>
          <p>Start with what needs to be done</p>
        </div>
        <div className='addmain'>
          <h2>Check</h2>
          <p>Project Progress & Status Tracker</p>
        </div>
        <div className='addmain'>
          <h2>Save</h2>
          <p>Protecting Productivity Through Regular Saves</p>
        </div>
      </div>
    </div>
  )
}

export default Home