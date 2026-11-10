// import React from 'react'

// const followButton = ({ name = "Follow" }) => {
//     return (
//         <div className='followButton'>

//             <a href=''>{name}</a>
//         </div>
//     )
// }

// export default followButton

// import React from "react";
// const FollowButton = ({ name = "Placeholder"}) =>{
//     return(
//         <div className="followButton">
//             <a href="">{name}</a>
//         </div>
//     )
// }
// export default FollowButton

import React from 'react'

const followButton = (props) => {
    console.log(props)
    return (
        <div className='followButton'>

            <a href=''>{props.name}</a>
            <div>

                <a href="">{props.name2}</a>
            </div>

            <div>

                <a href="">{props.name3}</a>
            </div>
        </div>
    )
}

export default followButton