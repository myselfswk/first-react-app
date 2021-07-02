import React from 'react';
import "./LoginForm.css";

function LoginForm() {

    const isLoggedIn = false;

    return (
        <div className="App">
            {
                isLoggedIn ?
                    <h1 className="login-text">Welcome to the Home Page User</h1>
                    :
                    <div className="LoginBlock">
                        <h1 className="login-text">Login User: -</h1>
                        <form>
                            <input className="form-input" type="text" placeholder="username" />
                            <input className="form-input" type="text" placeholder="password" />
                            <input className="loginButton" type="submit" value="Login" />
                        </form>
                    </div>
            }
        </div>
    )
}

export default LoginForm;
