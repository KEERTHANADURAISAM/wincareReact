import React from 'react'
import bg from '../media/Untitled.jpeg'
import location from '../media/placeholder.png'
import time from '../media/time.png'
import gmail from '../media/email.png'
import ph from '../media/phone-call.png'
import '../styles/Navbar.css'
import { GoTriangleDown } from "react-icons/go";
import Slider from './Slider'


const Navbar = () => {
    const myStyle = {
        backgroundColor:
            `#FFFFFF`,
        height:'100vh'
    };
    
  return (
     <>
         <div style={myStyle}>
       {/*------ header End-------- */}
        <header className='header-nav'>
          <div className='header-nav-div'>
            <img src={location} alt='location' className='nav-icon'/>
            <span>1213,palani</span>
            
            <img src={time} alt='time'  className='nav-icon'/>
            <span>9.00 am - 9.00 pm</span>
            </div>
        
             
            <div className='header-nav-div'>
            <img src={gmail} alt='@gmail'  className='nav-icon'/>
            <span>info@example.com</span>
            
            <img src={ph} alt='mobile number'  className='nav-icon'/>
            <span>+63836 51385</span>
       
            </div> 
           
        </header>
        <hr></hr>
        {/*------ header End-------- */}
        {/*------ Main navbar start -------- */}
        <nav>
<ul className='main-nav-ul'>
<li>Home</li>
<li>About</li>
<li>Community</li>
<li>
  <ol class="dropdown">

  <button className="dropbtn">Loans<span><GoTriangleDown className='down-arrow'/></span></button>
  <div className="dropdown-content">
  <li>Personal Loan</li>
  <li>Housing Loan</li>
  <li>Two wheeler Loan</li>
  <li>Micro Loans</li>
  </div>
  
  </ol>
</li>
<li>Contact Us</li>
<li>SignIn</li>
<li>SignUp</li>
</ul>
</nav>
  {/*------ Main navbar End -------- */}
  <Slider/>
    </div>

    </>

  )
}

export default Navbar