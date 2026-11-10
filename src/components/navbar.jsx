// import "../css/navbar.css"
// import React from 'react'

// const navbar = () => {
//   return (
//     <div className="navbar"><ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>Products</li></ul></div>
//   )
// }

// export default navbar

// import React from 'react'
// const Navbar = ()=>{
//   return(
//     <ul>
//     <li><a href="">Home</a></li>
//     <li><a href="">About</a></li>
//     <li><a href="">Contact</a></li>
//     </ul>
//   )
// }
// export default Navbar

// const Navbar = () => {
//   return(
//     <ul className="navbar">
//       <li><a href="">Home</a></li>
//       <li><a href="">About</a></li>
//       <li><a href="">Contact</a></li>
//     </ul>
//   )
// }
// export const Button = () =>{
//   return(
//     <button>Click here</button>
//   )
// }
// export default Navbar

// import React from "react";

// export default function navbar (){
//   return(
//     <nav className="navbar">
//       <div className="navbar1">
//         <a href="" className="logo">Pixabay</a>
//       </div>
//     </nav>
//   )
// }

import React from "react";
import "../css/style.css"
export default function navbar (){
  return(
    <nav className="navbar">
      <div className="navbar1">
        <a href="" className="logo">Pixabay</a>
        <button className="search-button">Search here</button>
        <a href="" className="link">Explore</a>
      </div>
      <div className="navbar2">
        <a href="" className="link">Login</a>
        <button className="join-button">Join</button>
        <button className="upload-button">Upload</button>
      </div>
    </nav>
  )
}

