import "./LoginForm.css";
import {useEffect, useState} from "react"

function LoginForm() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    return (
        <form action="" name="login-form">
            <h1>Login</h1>
            <div className="sign-in-fields">
                <input type="text" name = "username-field" placeholder="User name" onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" name = "password-field" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="submit">Log in</button>
            </div>
            <div className="sign-up-fields">
                <button id="sign-up">Create a new Account</button>
                <h3>Fahim Ahamed</h3>
            </div>
        </form>
    );
}

export default LoginForm;