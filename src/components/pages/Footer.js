import React from 'react'
import { IconContext } from 'react-icons'
import { IoCall, IoLocation } from 'react-icons/io5'
import "../styles/Footer.css";
import { MdEmail, MdOutgoingMail } from 'react-icons/md';
import { FaFacebook, FaGreaterThan, FaLinkedin } from 'react-icons/fa6';
const Footer = () => {
  return (
    <>
    <div className='footer-div'>
<div className='office-div'>
    <h4 className='ofc-head'>Our Office</h4>
    <div className='ofc-content-flex'>
<IconContext.Provider
      value={{ color: 'white', size: '20px',marginLeft:'40px',marginTop:"30px" }}
    >
      <div>
      <IoLocation />
      <span className='ofc-span'>123 Street, New York, USA</span>
      </div>
    </IconContext.Provider>   
    <IconContext.Provider
      value={{ color: 'white', size: '20px',marginLeft:'40px',marginTop:"30px" }}
    >
      <div>
      <IoCall />
      <span className='ofc-span'>+012 345 67890</span>
      </div>
    </IconContext.Provider>
    <IconContext.Provider
      value={{ color: 'white', size: '20px',marginLeft:'40px',marginTop:"30px" }}
    >
      <div>
      <MdEmail />
      <span className='ofc-span'>Wincare009@gmail.com</span>
      </div>
    </IconContext.Provider>
    </div>
    <IconContext.Provider
      value={{ color: 'white', size: '25px',marginLeft:'40px',marginTop:"30px" }}
    >
        <div className='ofc-social-icon'>
        <MdOutgoingMail />
        <FaFacebook />
        <FaLinkedin />
        </div>
    </IconContext.Provider>
    
</div>
<div className='ofc-div'>
    <h4 className='ofc-head'></h4>
    <IconContext.Provider
      value={{ color: 'white', size: '15px' }}
    >
      <div>
      <FaGreaterThan />
      <span className='service-span'>Financial Planning</span>
      </div>
    </IconContext.Provider>
    <IconContext.Provider
      value={{ color: 'white', size: '15px' }}
    >
      <div>
      <FaGreaterThan />
      <span className='service-span'>Cash Investment</span>
      </div>
    </IconContext.Provider>
    <IconContext.Provider
      value={{ color: 'white', size: '15px' }}
    >
      <div>
      <FaGreaterThan />
      <span className='service-span'>Financial Consultancy</span>
      </div>
    </IconContext.Provider>
    <IconContext.Provider
      value={{ color: 'white', size: '15px' }}
    >
      <div>
      <FaGreaterThan />
      <span className='service-span'>Business Loans</span>
      </div>
    </IconContext.Provider>
    <IconContext.Provider
      value={{ color: 'white', size: '15px' }}
    >
      <div>
      <FaGreaterThan />
      <span className='service-span'>Business Analysis</span>
      </div>
    </IconContext.Provider>
    
</div>
<div className='ofc-div'>
    <h4 className='ofc-head'>Quick Links</h4>
    <IconContext.Provider
      value={{ color: 'white', size: '10px'}}
    >
      <div className='greater-div'>
      <FaGreaterThan />
      <span className='service-span'> About Us</span>
      </div>
    </IconContext.Provider>
    <IconContext.Provider
      value={{ color: 'white', size: '15px' }}
    >
      <div>
      <FaGreaterThan />
      <span className='service-span'>Contact Us</span>
      </div>
    </IconContext.Provider>
    <IconContext.Provider
      value={{ color: 'white', size: '15px' }}
    >
      <div>
      <FaGreaterThan />
      <span className='service-span'>Our Services</span>
      </div>
    </IconContext.Provider>
    <IconContext.Provider
      value={{ color: 'white', size: '15px' }}
    >
      <div>
      <FaGreaterThan />
      <span className='service-span'>Terms & Services</span>
      </div>
    </IconContext.Provider>
    <IconContext.Provider
      value={{ color: 'white', size: '15px' }}
    >
      <div>
      <FaGreaterThan />
      <span className='service-span'>Support</span>
      </div>
    </IconContext.Provider>
    
</div>
<div className='office-div'>
    <h4 className='ofc-head'>Newsletter</h4>
    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
    <input type='text' placeholder='Your Email' id='mail' className='footer-news-div'/>
        
    <button className='foot-btn'>Sign Up</button>
  

</div>
    </div>
    <div className='sub-footer'>
<p className='foot-copyright'>©  <span className='site-name'>Wincare</span>, All Right Reserved.</p>
    </div>
    </>
  )
}

export default Footer