import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [loginFormData, setLoginFormData] = React.useState({email: ""})

    return (
        <div className="login-page">
            <h1>Sign in to your account</h1>
            <form className="login-form">
                <input 
                    className="email-input"
                    type="email" 
                    name="email"
                    placeholder="Email address"
                />
                <input
                    className="password-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <button className="login-btn orange-btn">Log in</button>
            </form>
        </div>
    )
}