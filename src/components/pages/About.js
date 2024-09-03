import React from 'react'
import aboutImg from '../media/img/about.jpg'
import '../styles/About.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IoCall, IoCloseCircle, IoPeopleCircleSharp } from "react-icons/io5";
import { IconContext } from 'react-icons';
import { BsPeopleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div>
    <div className='about-grid'>
<div>
<img src={aboutImg} alt='About-Image' className='about-img'/>
</div>
<div className='about-content'>
    <button className='about-head'>About Us</button>
    <div>
        <h1 className='about-slogan'>We Help Our Clients To Grow Their Business</h1>
        <p className='about-text'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        </div>
        
<div className='tab-head'>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home" className='p-2'>
      Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.<br/><br/>

Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
        <br/><br/>
Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit
      </Tab>
      <Tab eventKey="contact" title="Contact">
      Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
      <br/><br/>
Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit
      </Tab>
    </Tabs>  
 </div>
    </div>
    </div>
    <div className='available-head'>
        <div className='available-grid'>
        <IconContext.Provider
      value={{ color: 'blue', size: '40px',marginLeft:'40px',marginTop:"30px" }}
    >
      <div>
      <IoCloseCircle />
      </div>
    </IconContext.Provider>
    <div>
<h4 className='available-title'>No Hidden Cost</h4>
<p>Clita erat ipsum lorem sit sed stet duo justo</p>
</div>
<div className='vr-line'></div>
</div>

<div className='available-grid'>
        <IconContext.Provider
      value={{ color: 'blue', size: '40px' ,marginLeft:'40px'}}
    >
      <div>
      <BsPeopleFill />
      </div>
    </IconContext.Provider>
    <div>
<h4 className='available-title'>
Dedicated Team</h4>
<p>Clita erat ipsum lorem sit sed stet duo justo</p>
</div>
<div className='vr-line'></div>
</div>
<div className='available-grid'>
<IconContext.Provider
      value={{ color: 'blue', size: '40px' ,marginLeft:'40px'}}
    >
      <div>
      <IoCall />
      </div>
      </IconContext.Provider>
    <div>
<h4 className='available-title'>24/7 Available</h4>
<p>Clita erat ipsum lorem sit sed stet duo justo</p>
</div>
</div>
    </div>
    </div>
  )
}

export default About