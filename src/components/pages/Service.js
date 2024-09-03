import React from 'react'
import "../styles/Service.css";
import { LuMenu } from 'react-icons/lu';
import { IconContext } from 'react-icons';
import serviceImage1 from '../media/img/service-1.jpg'
import { FaCheck } from 'react-icons/fa6';
const Service = () => {
  return (
    <div>
      <section>
      <div className='service-flex'>
    <button className='service-head-btn'>Our Services</button>
    <h1 className='service-h1-tag'>Awesome Financial <br></br> Services For Business</h1>
</div>
<div className='service-div'>
  <div className='servce-icon'>
  <IconContext.Provider
          value={{ color: "#ffff", size: "30px", marginLeft: "40px" }}
        >
          <div className='icon-menu'>
          <LuMenu />
          <h4>Financial Planning</h4>
          </div>   
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "#ffff", size: "30px", marginLeft: "40px" }}
        >
          <div className='icon-menu'>
          <LuMenu />
          <h4>Cash Investment</h4>
          </div>   
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "#ffff", size: "30px", marginLeft: "40px" }}
        >
          <div className='icon-menu'>
          <LuMenu />
          <h4>Financial Consultancy</h4>
          </div>   
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "#ffff", size: "30px", marginLeft: "40px" }}
        >
          <div className='icon-menu'>
          <LuMenu />
          <h4>Business Loans</h4>
          </div>   
        </IconContext.Provider>
  </div>  
  <div>
  <img src={serviceImage1} alt='service-Image1' className='Service-img'/>
  </div>
  {/* content */}
  <div className='service-content'>
    <h3 className='service-h3'>25 Years Of Experience In Financial Support</h3>
    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.</p>
    <IconContext.Provider value={{ color: "#365FFC", size: "20px"}}>
   <div className='facheck-div'>
    <FaCheck /><span>Secured Loans</span>
   
    </div>
    </IconContext.Provider>
    <IconContext.Provider value={{ color: "#365FFC", size: "20px"}}>
   <div className='facheck-div'>
    <FaCheck /><span>Secured Loans</span>
    
    </div>
    </IconContext.Provider>

    <IconContext.Provider value={{ color: "#365FFC", size: "20px"}}>
   <div className='facheck-div'>
    <FaCheck /><span>Cash Advanced</span>
   
    </div>
    </IconContext.Provider>

    <button className='service-read-btn'>Read More</button>

    </div>
  
</div>

      </section>
      




</div>



  
  )
} 

export default Service

