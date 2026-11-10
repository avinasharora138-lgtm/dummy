// import React from "react";
// const card = ({link, Username}) =>{
//     return(
//     <div className="container">
//         <div id="img"><img src={link}></img>

//     </div>
//         <div className='followButton'>

//             <a href=''>{Username}</a>
            
//         </div>
//         <div className="followButton1">
//             <a href="">Follow</a>
//         </div>
//     </div>
//     )
// }
// export default card 

import React from 'react'

// export const Card = ({image, h3}) => {
//   return (
//     <div>
//         <img src={image}></img>
//         <h3 className='upload-heading'>{h3}</h3>
//         <h2 className='showcase-heading'>Showcase Your Content</h2>
//         <p className='paragraph'>Share your creativity with a worldwide audience, build your creative portfolio, be selected in Pixabay curations, get hired, receive donations and inspire millions.</p>
//         <button className='uploadmedia-button'>Upload media</button>
//     </div>
//   )
// }

const Card = ({main, link}) => {
  return (
    <div className='card'>
      <h1>{main}</h1>

      <a href="">{link}</a>

    </div>
  )
}
export default Card 