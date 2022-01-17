import emailjs from 'emailjs-com'
import './contact.scss';
import { useState } from 'react';
export default function Contact() {
  const [message, setMessage] = useState(false)
  const submitted=(e)=>{
    e.preventDefault()
    setMessage(true);
    emailjs.sendForm('service_tt0bn1j','template_w4f0cpd', e.target,'user_NAxsEqW2owi90eCldZggC')
  }
    return (
        <div className='contact' id='contact'>
          <div className="left">
            <img src="assets/contact.png" alt="contact" />
          </div>
          <div className="right">
            <h1>Contact Us</h1>
            <form onSubmit={submitted}>
              <input type="text" name='name' placeholder='Name'/>
              <input type="email" name='sender_email' placeholder='Email'/>
              <textarea name="message" placeholder='Message'></textarea>
              <button type='submit'>Send</button>
              {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
          </div>
        </div>
    )
}
