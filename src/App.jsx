// import "./App.css"
// import Navbar from "./components/navbar"
// function App(){
// return(
//   <>
//   <Navbar/>

// const { useState } = require("react");

// const { useEffect } = require("react");

//   <div id="hello">Hello</div>
//   <div className="world">World</div>
//   <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li>Services</li>
//     <li>Products</li>
//   </ul>
//   </>
// )

// }
// export default App

// function App(){
//   return ("Hello")
// }
// export default App
// import Navbar from "./components/navbar"
// function App(){
//   return(
//     <Navbar />
//   )
// }
// export default App

// import Navbar, {Button} from "./components/navbar"
// function App(){
//   return(
//     <>
//     <Navbar />
//     This content is in App file
//     <Button />
//     </>
//   )
// }
// export default App

// import Navbar, { Button } from "./components/navbar"
// function app() {
//     return (
//         <>
//             <Navbar />
//             This content is in App file
//             <Button />

//         </>
//     )
// }

// export default app

// import './css/style.css'
// import FollowButton from './components/button'
// function app() {
//     return (
//         <>
//             Username : instagram
//             <FollowButton name="Instagram" />
//             <FollowButton name='Cary' />
//             <FollowButton name="CodewithMe" />
//             <FollowButton />

//         </>
//     )
// }

// export default app
// import './css/style.css'
// import Card from './components/card.jsx'

// function App(){
//   return(
// <><Card link="https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80" Username="Rajan" ></Card>
// <Card link="https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80" Username="Vipin"></Card> 
// </>
//   )
// }
// export default App

// import './css/style.css'
// import FollowButton from './components/button'
// function App (){
//   return(
//     <>
//     <FollowButton name='Ramesh'/>
//     <FollowButton></FollowButton>
//     </>
//   )
// }
// export default App 

// import './css/style.css'
// import FollowButton from './components/Button'
// const details = {
//     name: "Suresh",
//     name2: "Follow",
//     name3: "Yes"
// }
// function app() {
//     return (
//         <>
//             <FollowButton {...details}/>
//             <FollowButton name="sita" name2="unsubscribe"></FollowButton>

//         </>)
// }

// export default app

// import React, { useEffectEvent } from 'react'
// import Navbar from './components/navbar.jsx'
// import Card from './components/card.jsx'
// const App = () => {
//   const cardData = [{
//     image: "https://images.pexels.com/photos/31256342/pexels-photo-31256342.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-31256342.jpg&fm=jpg",
//     h3:"Card1"
// }, {
//     image: " https://cdna.artstation.com/p/marketplace/presentation_assets/003/430/266/large/file.jpg?1706950306",
//     h3:"Card2 "
// }]
//   return (
//     <div><Navbar></Navbar>
//     <Card image='https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80' h3="Upload1">
      
//     </Card>
//     <Card image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10' h3="Upload2"></Card>
//     <Card></Card>
//     <Card></Card></div>
//   )
// }

// export default App

// const CardList = [{
//   link: "HOME",
//   main: "Heading 1"
// },{
//   link: "About",
//   main: "Heading 2"
// },{
//   link: "Contact",
//   main: "Heading 3"
// }
// ]
// const App = () => {
//   return(
//     <>
//     {CardList.map((list) => 
//     <Card link = {list.link} main = {list.main} />
//     )}
//     </>
//   )
// }
// export default App

// import { useState } from 'react';
// // useHookname
// const App = () => {

//     const [a, setA] = useState(1)
//     return (
//         <>
//             {a}
//             <button onClick={() => {
//                 setA(a + 1)
//                 console.log(a);
//             }} >Click here</button>

//             {a}

//             {a}
//         </>
//     )
// }

// export default App


// import {useState} from 'react'
// const App = () => {
//     const [a, SetA] = useState(true)
//     const [b, SetB] = useState(true)
//     return(
//         <>
//         <button onClick={()=>{SetA(!a)}}>Show/Hide</button>
//         <button onClick={()=>{SetB(false)}}>Hide Permanently</button>
//         {(a && b) &&
//         <>
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Services</li>
//             <li>Login</li>
//         </ul>
        
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae nam praesentium nobis a minima deserunt dolores, obcaecati hic blanditiis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quod soluta necessitatibus similique est eum, suscipit vel aliquam blanditiis architecto reiciendis! Tenetur vel explicabo animi neque expedita earum sunt sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem id unde magni alias explicabo consequuntur omnis corrupti recusandae, minima nulla quos iusto laboriosam doloribus ad consectetur assumenda voluptatum nihil adipisci ut repudiandae voluptatem quae! Consequuntur id sint cum dolore. Dolorem, libero culpa minima consequuntur cumque deleniti, dolorum recusandae ex animi consequatur voluptatem, unde quisquam numquam iure deserunt. Similique, vel. Explicabo ea optio, reprehenderit quod totam tenetur perspiciatis officiis. Officiis.</p>
// </>
//         }
        
//         </>
//     )
// }
// export default App


// import { useState } from 'react'
// import "./css/style.css"
// const App = () => {
//     const [a, SetA] = useState([])
//     return(
//         <>
//         <button onClick={()=>{SetA([...a, "Laptop"])}}>Laptop</button>
//         <button onClick={()=>{SetA([...a, "Phone"])}}>Phone</button>
//         <button onClick={()=>{console.log(a)}}>Console</button>
//         {a.map((b, index)=> <p key = {index} className='item'>item name: {b}</p>)}
//         </>
//     )
// }
// export default App

// import { useState } from 'react'
// import './css/style.css'
// const App = () => {
//     const items = [{
//         name: "HP Laptop",
//         price: 20000,
//         quantity: 1
//     },{
//         name: "DELL Laptop",
//         price: 15000,
//         quantity: 3
//     }]
//   const [cart, SetCart] = useState ([]);
//   const handleclick = (item) => {
//     SetCart([...cart, item]); console.log(cart)
//   }
//   return(
//     <>
//     {items.map((item, index)=><div key={index} onClick={()=>handleclick(item)} className='container'><p>Item name:{item.name}</p><p>{item.price}</p><p>{item.quantity}</p></div>)}
//     Your Cart:
//     {cart.map((laptop, index) => <div key={index}><p>{laptop.name}</p><p>{laptop.price}</p><p>{laptop.quantity+1}</p></div>)}
//     </>
//   )
// }

    
// export default App

// import { useState, useEffect } from 'react'
// //useHookname

// const App = () => {

//   const [count, setCount] = useState (0);
//   const [b, setB] = useState (0)

// useEffect (()=>{
//   console.log("Count", count)
// }, [])

//   return (

//     <>

//     <button onClick={ () => {setCount (count + 1);}}>Count: {count}</button>
//     <button onClick={ () => {setB (b + 1);}}>B: {b}</button>
    
//     </>
//   )
//   }
//   export default App


// import { useState, useEffect } from 'react'
// //useHookname

// const App = () => {
//   const [users, setUsers] = useState ([])
//   const [a, SetA] = useState (0)

//   useEffect (() => {
//     fetch ('https://jsonplaceholder.typicode.com/users'). then (res => res.json ()).then (data => setUsers (data))
//     console.log('useEffect called')
//   },[a])

//   return(
//     <>
//     <h1>Users</h1>
//     <ul>
//       {users.map (user => (
//         <li key={user.id}>{user.name} City: {user.address.city} Email: {user.email} Username: {user.username}</li>
//       ))}
//     </ul>

//     <button onClick={ () => {SetA (a+1)}}>Increment</button>
//     <p>Count: {a}</p>
//     </>
//   )
// }
// export default App


// import { useState } from 'react';
// function App() {
//     const [name, setname] = useState()
//     const [rollno, setroll] = useState()
//     const [classn, setclassn] = useState()

//     return (
//         <>
//             <form action="">
//                 <input type="text"  placeholder='Enter your name here' value={name} onChange={(e) => setname(e.target.value)} />
//                 <input type="number"  placeholder='Enter your Roll No here' value={rollno} onChange={(e) => setroll(e.target.value)} />
//                 <input type="text"  placeholder='Enter your Class here' value={classn} onChange={(e) => setclassn(e.target.value)} />

//             </form>
//             {name}
//             {rollno}
//             {classn}
//         </>
//     )
// }
// export default App

// import { useState } from "react";

// function App() {
//     const [students, setStudents] = useState([
//         {
//             id: 1,
//             name: "Gurbaj",
//             course: "MERN"
//         },
//         {
//             id: 2,
//             name: "Aman",
//             course: "React"
//         }
//     ]);

//     const [name, setName] = useState("");
//     const [course, setCourse] = useState("");

//     const [editId, setEditId] = useState(null);

//     // CREATE
//     const addStudent = (e) => {
//         e.preventDefault();

//         if (name === "" || course === "") {
//             alert("Please fill all fields");
//             return;
//         }

//         const newStudent = {
//             id: Date.now(),
//             name: name,
//             course: course
//         };

//         setStudents([...students, newStudent]);

//         setName("");
//         setCourse("");
//     };

//     // DELETE
//     const deleteStudent = (id) => {
//         setStudents(
//             students.filter((student) => student.id !== id)
//         );
//     };

//     // EDIT - Put data into input fields
//     const editStudent = (student) => {
//         setEditId(student.id);
//         setName(student.name);
//         setCourse(student.course);
//     };

//     // UPDATE
//     const updateStudent = (e) => {
//         e.preventDefault();

//         setStudents(
//             students.map((student) => {
//                 if (student.id === editId) {
//                     return {
//                         ...student,
//                         name: name,
//                         course: course
//                     };
//                 }

//                 return student;
//             })
//         );

//         setEditId(null);
//         setName("");
//         setCourse("");
//     };

//     // CANCEL EDIT
//     const cancelEdit = () => {
//         setEditId(null);
//         setName("");
//         setCourse("");
//     };

//     return (
//         <div style={{ padding: "30px" }}>
//             <h1>Student Management</h1>

//             {/* FORM */}
//             <form
//                 onSubmit={editId === null ? addStudent : updateStudent}
//             >
//                 <input
//                     type="text"
//                     placeholder="Enter student name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />

//                 <input
//                     type="text"
//                     placeholder="Enter course"
//                     value={course}
//                     onChange={(e) => setCourse(e.target.value)}
//                 />

//                 <button type="submit">
//                     {editId === null ? "Add Student" : "Update Student"}
//                 </button>

//                 {editId !== null && (
//                     <button type="button" onClick={cancelEdit}>
//                         Cancel
//                     </button>
//                 )}
//             </form>

//             <hr />

//             {/* READ */}
//             <h2>Students</h2>

//             {students.length === 0 ? (
//                 <p>No students found.</p>
//             ) : (
//                 students.map((student) => (
//                     <div
//                         key={student.id}
//                         style={{
//                             border: "1px solid black",
//                             padding: "10px",
//                             marginBottom: "10px"
//                         }}
//                     >
//                         <h3>{student.name}</h3>
//                         <p>Course: {student.course}</p>

//                         {/* UPDATE */}
//                         <button onClick={() => editStudent(student)}>
//                             Edit
//                         </button>

//                         {/* DELETE */}
//                         <button onClick={() => deleteStudent(student.id)}>
//                             Delete
//                         </button>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default App

// import {useState} from 'react'
// function App(){
//   const [students, setStudents] = useState ([
//     {
//       id: 1,
//       name: "KAJAL",
//       course: "MERN"
//     },
//     {
//       id: 2,
//       name: "Avi",
//       course: "PHP"
//     }
//   ]);
//   const [name, setName] = useState ("");
//   const [course, setCourse] = useState("");
//   const [editId, setEditId] = useState (null);
  
//   const addStudent = (e) => {
//     e.preventDefault();
//     if(name === "" || course ===""){
//       alert("Please fill all fields");
//       return;
//     }
//     const newStudent = {
//       id: Date.now(),
//       name: name,
//       course: course
//     };
//     setStudents ([...students, newStudent]);
//     setName("");
//     setCourse("");
//   };
//   const deleteStudent = (id) => {
//     setStudents (
//       students.filter((student)=>student.id !== id)
//     );
//   };
//   const editStudent = (student)=>{
//     setEditId (student.id);
//     setName (student.name);
//     setCourse (student.course);
//   };
//   const updateStudent = (e)=>{
//     e.preventDefault ();
//     setStudents(
//     students.map((student)=>{
//       if (student.id === editId){
//         return{
//           ...student,
//           name: name,
//           course: course
//         };
//       }
//       return student;
//     })
//   );
//     setEditId (null);
//     setName ("");
//     setCourse ("");
//   };
//   const cancelEdit = () => {
//     setEditId(null);
//     setName ("");
//     setCourse ("");
//   };
//   return(
//     <div style={{padding: "30px"}}>
//       <h1>Student Management</h1>
//       {}
//       <form onSubmit={editId === null? addStudent : updateStudent}>
//         <input 
//         type="text"
//         placeholder='Enter Student Name'
//         value={name}
//         onChange={(e)=> setName (e.target.value)} 
//         />
//         <input 
//         type="text"
//         placeholder='Enter Course'
//         value={course}
//         onChange={(e)=> setCourse (e.target.value)} 
//         />
//         <button type='submit'>
//           {editId === null? "Add Student" : "Update Student"}
//         </button>
//         {editId !== null && (
//           <button type='button' onClick={cancelEdit}>Cancel</button>
//         )}
//       </form>
//       <hr />
//       <h2>Students</h2>
//       {students.map((student)=>(
//         <div key={student.id}
//         style={{
//           border: "1px solid black",
//           padding: "10px",
//           marginBottom: "10px"
//         }}>
//           <h3>{student.name}</h3>
//           <p>Course: {student.course}</p>
//           <button onClick={()=> editStudent(student)}>
//             Edit
//           </button>
//           <button onClick={()=> deleteStudent(student.id)}>
//             Delete
//             </button>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default App

// import { useState } from "react";
// // import App from "../App2";
// const App = () =>{

//   return(

//     <>
//     <input type="number" name="" id="input1" onChange={(e)=>(e.target.value)}/>
//     <input type="number" name="" id="input2" />

//     <button onClick={()=>{calculator()}}>Calculator</button>
//     </>
//   )
// }
// export default App

// import React from "react"
// import { useState } from "react"

// const App = () => {
// const [initial, setInitial] = useState ("")
// const [last, setLast] = useState ("")
// const [addition, setAddition] = useState (last)
// const sum = (e) => {
//   e.preventDefault ()
//   setAddition (Number(initial) + Number(last))
// }
//   return (
//     <>
//     <form action="" onSubmit={sum} >
//       <input type="number" onChange={(e)=>setInitial(e.target.value)}/>
//       <input type="number" onChange={(e)=>setLast(e.target.value)}/>
// <br /> <br />
//       <button>Calculator</button>
//     </form><br />
//     Sum is: {addition}
//     </>
//   )
// }

// export default App


// 

// import React, {useEffect} from "react";
// import {useRef} from "react";

// const App = () => {
//   const ref1 = useRef ()
//   const handleClick = () => {
//     ref1.current.focus()
//   }
//   const handleClick2 = () => {
//     ref1.current.blur()
//   }
//   useEffect (() => {
// ref1.current.focus()
//   },[])
//   return (
// <>
// <input ref={ref1} type="text"  />
// <button onClick={handleClick}>Focus</button>
// <button onClick={handleClick2}>Blur</button>
// </>
//   )
// }
// export default App

// import { useState } from "react";
// function App(){
//   const [name, setName] = useState ("")
//   const [names, setNames] = useState([]);
//   const addName = () => {
//     if(name!=""){
// setNames ([...names, name])
//     setName ("")
//     }
    
//   }
//   const remove = (index) =>{
//     setNames(names.filter((value, i) => index != i))
//   }
//   const edit = (index) => {

//   }
//   return(
//     <div>
//       <h2>Add Names</h2>
//       <input type="text" placeholder="Enter your name here" onChange={(e)=>setName(e.target.value)} value={name}/>
//       <button onClick={addName}>Add Name</button>
//       <h3>Names list:</h3>
//       <ul>
//         {names.map((item, index)=>(<p key={index}>{index}{item} <button type="submit" onClick={()=>edit(index)}>Edit</button> <button onClick={()=>remove(index)}>Remove</button></p>))}
//       </ul>
//     </div>
//   )
// }
// export default App


// import { useState } from "react";

// function App() {
//     const [name, setName] = useState("");
//     const [names, setNames] = useState([]);
//     const [updateOpen, setUpdateOpen] = useState(false);
//     const [editIndex, setEditIndex] = useState(null);

//     const addName = () => {
//         if (name.trim() !== "") {
//             setNames([...names, name]);
//             setName("");
//         }
//     };

//     const remove = (index) => {
//         setNames(names.filter((value, index2) => index !== index2));
//     };

//     const update = (index) => {
//         setUpdateOpen(true);
//         setEditIndex(index);
//         setName(names[index]);
//     };

//     const saveUpdate = () => {
//         if (name.trim() !== "") {
//             const updatedNames = [...names];
//             updatedNames[editIndex] = name;

//             setNames(updatedNames);
//             setName("");
//             setUpdateOpen(false);
//             setEditIndex(null);
//         }
//     };

//     return (
//         <div>
//             <h2>Add Names</h2>

//             <input
//                 type="text"
//                 placeholder="Enter your name here"
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//             />

//             {!updateOpen ? (
//                 <button onClick={addName}>Add Name</button>
//             ) : (
//                 <button onClick={saveUpdate}>Save Update</button>
//             )}

//             <h3>Names List:</h3>

//             <ul>
//                 {names.map((item, index) => (
//                     <li key={index}>
//                         {index + 1}. {item}

//                         <button onClick={() => remove(index)}>
//                             Remove
//                         </button>

//                         <button onClick={() => update(index)}>
//                             Update
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;


// import React, { useState } from "react";
// function App() {
// const [name, setName] = useState("");
// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [fullName, setFullName] = useState("");
// const [birthYear, setBirthYear] = useState("");
// const [age, setAge] = useState("");
// const date = new Date()
// const year = date.getFullYear()
// const [heading, setHeading] = useState("Heading to change the text")
// const [anotherHeading, setAnotherHeading] = useState ("")
// const [showText, setShowText] = useState ("")
// const clickHere = () => {
//     alert ("Your entered name is " + name);
// }
// const showFullName = () => {
// setFullName(firstName +" "+ lastName)
// }
// const calculateAge = () => {
// setAge(year-birthYear)
// }
// const changeHeading = () => {
// setHeading ("Heading changed successfully")
// }
// const changedHeading = () => {

// }
// const changeText = () => {
//     setShowText (!showText);
// }

//    return (
//     <div>
//         {year}
//         <h2>1. Take a name as input and show it in an alert</h2>
//         <input  
//         type="text"
//         value={name} 
//         placeholder="Enter your name here"  
//         onChange={(e) => setName(e.target.value)}
//         />
        
//         <button onClick={clickHere}>Click here</button>

//         <h2>2. Take first name and last name and display the full name</h2>
//         <input type="text"
//         value={firstName}
//         placeholder="Enter your First Name here" 
//         onChange={(e)=>setFirstName(e.target.value)}
//         />
//         <input type="text"
//         value={lastName}
//         placeholder="Enter your Last Name here"
//         onChange={(e)=>setLastName(e.target.value)}
//         />
//         <button onClick={showFullName}>Show Full Name</button>
//         <div>fullName:{fullName}</div>

//         <h2>3. Take birth year as input and Calculate Approximate Age</h2>
//         <input type="number"
//         value={birthYear} 
//         placeholder="Enter your Birth Year"
//         onChange={(e)=>setBirthYear(e.target.value)}
//         />
//         <button onClick={calculateAge}>Calculate Age</button>
//         age:{age}

//         <h2>4. Create a heading and a button that changes the heading text</h2>
//         <h3>{heading}</h3>
//         <button onClick={changeHeading}>Change Heading</button>

//         <h2>5. Create Another Heading and button that changes the heading text</h2>
//         <h3>Another Heading to change the text</h3>
//         <button onClick={changedHeading}>Another Heading</button>

//         <h2>6. Create a button that displays text when clicked and hides it when clicked again</h2>
//         <button onClick={changeText}>{showText? "Hide Text" : "Show Text"}</button>
//         {showText && <p>This text will display and will hide when you will click on the button</p>}
// </div>
//     )
// }

//  export default App

// import React, {useState} from "react";

// function App () {
// const [count, setCount] = useState(0)
// const [color, setColor] = useState("")
// const [size, setSize] = useState(10)
// const [darkMode, setDarkMode] = useState(false)
// return(
//     <div style={{backgroundColor: darkMode? "black" : "white", color: darkMode? "white" : "black", height: "100vh"}}>
//     <button disabled={false}>Disabled</button>
//     <h2>1. Click Counter - Show how many times the button has been changed. Disabled the button after 10 clicks.</h2>
//     <button onClick={()=>setCount(count+1)}disabled={count>=10}>{count>=10? "Limit Reached" : "Click here"}</button>
//     <button onClick={()=>setCount(0)}>Reset</button>
//     <p>Button clicked: {count}times</p>

//     <h2>2. Color Switcher - Three buttons (red, green, blue). Clicking changes the background of a div</h2>
//     <div className="mainreact" style={{backgroundColor: color}}>changes the background of div</div>
//     <button onClick={()=>setColor("red")}>Red</button>
//     <button onClick={()=>setColor("green")}>Green</button>
//     <button onClick={()=>setColor("blue")}>Blue</button>

//     <div style={{fontSize: size}}>3. Font Size Adjuster - Two buttons: "A+" and "A-". Each click changes the font size of a paragraph by 2px. Cap at 8px min and 40px max.</div>
//     <button onClick={()=>setSize(Math.min(size+4, 20))}>A+</button>
//     <button onClick={()=>setSize(Math.max(size-4, 8))}>A-</button>

//     <h2>4. Theme Toggle - Light/ Dark mode button. Changes the page background and text color.</h2>
//     <p>Current theme: {darkMode? "Dark Mode" : "Light Mode"}</p>
//     <button onClick={()=>setDarkMode(!darkMode)}>Switch to {darkMode? "Light" : "Dark"} Mode</button>
//     </div>
// )
// }
// export default App
import React, {useState} from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contacts';
import Login from './pages/Login';
import About from './pages/About';
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Navbars from "./components/Navbars";
import Dashboard from "./dashboard";
import Tasks from "./pages/Tasks";
import { BrowserRouter, Link } from "react-router-dom";
const App = () => {
    return (
        <>
        <Link to='/'>hello</Link>
        <Navbars/>
        <Routes>
            <Route path="/home" element={<Home/>}></Route>

            <Route path="/contacts" element={<Contact/>}></Route>

            <Route path="/login" element={<Login/>}></Route>

            <Route path="/about" element={<About/>}></Route>

            <Route path="/services" element={<Services/>}></Route>

            <Route path="/dashboard" element={<Dashboard/>}></Route>

            <Route path="tasks" element={<Tasks/>}></Route>
            ABCD
        </Routes>
        <Footer></Footer>
        </>
    )
}
export default App
// import {useState} from 'react';
// const App = () =>{
//     const [a, setA] = useState (0);
//     return (
//         <>
//         {a == 1? <> This is true Condition </> : <> This is false condition </>}
//         <button onClick={()=>setA(a+1)}>Count is {a}</button>
//         </>
//     )
// }
// export default App

// import { useState } from "react";
// import First from "./components/First";
// const App = () =>{
//     const [a,setA] = useState (0);
//     return(
//         <>
//         {a == 1 ? <First/>:
//         a == 2 ? <> This meets for a = 2 </> : <> No Condition meets this </>}
//         <button onClick={()=>setA(a+1)}>Count is {a}</button>
//         </>
//     )
// }
// export default App

// Assigment task
// import React, {useState} from "react";
// import './App.css'
// import { Router } from "react-router-dom";
// function App () {
//     const [username, setUsername] = useState ("");
//     const [password, setPassword] = useState ("");
//     const correctPassword = "20897";
//     const handleLogin = (e) => {
//         e.preventDefault();
//          if (password === correctPassword){
//             router.push
//          }
//     }
//     return(
//         <div className="loginform">
//             <h1>Login Form</h1>
//             <form onSubmit={handleLogin}>
//                 <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} /> <br />
//                 <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
//                 <button>Login</button>
//             </form>
//         </div>
//     )
// }
// export default App