import React from 'react'
import "../styles/GetInPage.css";
import contact from '../media/Untitled (2).png'
const GetInPage = () => {
    const myStyle = {
        backgroundColor:'#3F66FC',
        padding:'20px',
        // backgroundImage:`url (${contact})`,
        // backgroundRepeat: 'no-repeat',
      marginTop:'150px',
    //   height:'400px',
    };
  return (
    <div style={myStyle}>

    <form className='getIn-form'>
        <div className='get-card'>
            <div className='get-headers'>
        <span className='get-p-tag'>Get In Touch</span>
        <h1 className='get-h1-tag'>Request A Call-Back</h1>
        </div>
        <div className='getIn-input-div'>
<input type='text' id='name' placeholder='Your Name' className='get-input-name'/>
<input type='email' id='email' placeholder='Your Email' className='get-input-name'/>
</div>
<div className='getIn-input-div'>
<input type='text' id='mobile' placeholder='Your Mobile' className='get-input-name'/>
<input type='text' id='subject' placeholder='Subject' className='get-input-name'/>
</div>   
<textarea name='msg' id='msg' placeholder='Message' className='get-in-text'/>
<div className='get-btn-flex'>
<button className='get-msg-btn'>Submit Now</button>
</div>
        </div>
    </form>


    </div>
  )
}

export default GetInPage