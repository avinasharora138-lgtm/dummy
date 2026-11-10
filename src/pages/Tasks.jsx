import React from "react";
import { useState } from "react";
import '../css/tasks.css'

function Tasks() {
    const [task, setTask] = useState("");
    const add=()=>{

    }
    return(
        <div className="taskcontainer">
            <h1>My Tasks</h1>
            <div className="taskinput">
                <input 
                type="text" 
                placeholder="Enter Task"
                value={task}
                onChange={(e)=>setTask(e.target.value)}/>
                <input 
                    type="checkbox"
                     />
                <button onClick={add}>Add</button>
                     <button className="deletebutton">Delete</button>
                
            </div>
            
        </div>
    )
}
export default Tasks