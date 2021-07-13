import React from 'react';
import logo from '../assets/images/logo.png';


const Login = () => {
    return(
        <div className='loginContainer'>
            <form className='loginForm'>
                <img src={logo} alt='' width='200px' height='190px'/>
                <h1>Login Page</h1>
                <input className='inputField' type='text' id='username' name='username' placeholder='User Name' required/>
                <input className='inputField' type='password' id='password' name='password' placeholder='Password..' required/>
                <input className='loginButton' type='submit' name='login' value='Login'/>
            </form>
        </div>
    );
};

export default Login;