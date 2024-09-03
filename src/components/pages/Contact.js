import React from 'react'
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className='contact-main-grid'> 
          <div className='contact-main-flex'>
            <span className='contact-btn'>Contact</span>
            <h1 className='contact-head'>If You Have Any Query, Please Contact Us</h1>
            <p className='contact-content'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.<span className='dow-span'>Download Now.</span></p>
            <form>
                <div className='input-div'>
                <input type='text' name='name' placeholder='Your Name' className='contact-input'/>
                <input type='text' name='email' placeholder='Your Email' className='contact-input'/>
                </div>
                <div className='text-area-div'>
                    <input type='text' name='subject' placeholder='Subject' className='sub-input'/>
                    <textarea type='text' name='msg' placeholder='Message' className='text-area'/>
                    <button className='msg-btn'>Send Message</button>
                </div>
            </form>
          </div>
          <div className='location-div'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.9177866986157!2d77.53707076948801!3d10.447648718226178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9dfcb46ad33f1%3A0x63b6c23129e6d88c!2sWin%20Care!5e0!3m2!1sen!2sin!4v1716290497765!5m2!1sen!2sin" width="600" height="550" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
    </div>
  )
}

export default Contact