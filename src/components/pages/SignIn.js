import React from 'react'
import "../styles/SignIn.css";
import login from '../media/img/Blue and White Illustrated Login Page Mobile Prototype (1).png'
const SignIn = () => {
  return (
    <div>
        <form className='sigin-form'>
<div>
    <img src={login} alt='SignIn' className='login-img'/>
</div>
<div className='login-input-div'>
    <h4 className='login-h1-tag'>welcome</h4>
    <input type='text' id='name' placeholder='Your Email' className='login-input'/>
    <input type='password' id='pwd' placeholder='Password'  className='login-input'/>
    <h4 className='sigin-label'>SignIn</h4>
    <label className='sigin-label-forgot'>Forgot Password?</label>
    <label className='sigin-label-Account'>Don't Have an Account?</label>
</div>
        </form>
    </div>
  )
}

export default SignIn