import React, {useState} from "react";
import '../css/login.css'
import { Router, useNavigate } from "react-router-dom";
function Login () {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");
    const navigate = useNavigate()
    const [flag, setFlag] = useState(null)
    const correctPassword = "20897";
    const handleLogin = (e) => {
        e.preventDefault();
         if (password === correctPassword){
            navigate("/dashboard")
         }
         else{
          setFlag(1)
         }
    }
    return(
        <div className="loginform">
            <h1 className="h1">Login Form</h1>
            {flag && <div className="pass">Invalid Password!</div>}
            <form onSubmit={handleLogin}>
                <input type="text" className="input" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} /> <br />
                <input type="text" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
                <button className="loginbutton">Login</button>
            </form>
        </div>
    )
}
export default Login