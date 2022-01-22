import emailjs from 'emailjs-com'
import './contact.scss';
import { useState } from 'react';
export default function Contact() {
  const [message, setMessage] = useState(false)
  const submitted = (e) => {
    e.preventDefault()
    setMessage(true);
    emailjs.sendForm('service_tt0bn1j', 'template_w4f0cpd', e.target, 'user_NAxsEqW2owi90eCldZggC')
  }
  message && alert("Thanks, I'll reply ASAP :) Your message has been successfully send");
  return (
    <div>
      <div className='contact' id='contact'>
        <div className="left">
          <img src="assets/contact.png" alt="contact" />
        </div>
        <div className="right">
          <h1>Contact Me</h1>
          <form onSubmit={submitted}>
            <input type="text" name='name' placeholder='Name' />
            <input type="email" name='sender_email' placeholder='Email' />
            <textarea name="message" placeholder='Message'></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
      <div className="footer colorfoot">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-2 offset-1 col-sm-3">
                    <h5>Link</h5>
                    <ul className="list-unstyled linkstyle">
                        <li><a href="#intro">Home</a></li>
                        
                    </ul>
                </div>
                
                <div className="col-12 col-sm-8 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon " href="https://www.facebook.com/profile.php?id=100009735406017"><i className="fab fa-facebook-f fa-2x facebookcol"></i></a>
                        <a className="btn btn-social-icon " href="https://twitter.com/Akhiles08482458?t=7Y0noBnPMIPgQItUEt8IVA&s=08"><i className="fab fa-twitter fa-2x twittercol"></i></a>
                        <a className="btn btn-social-icon " href="https://www.linkedin.com/in/akhilesh-kumar-1608851b3/"><i className="fab fa-linkedin-in fa-2x linkedincol"></i></a>
                        <a className="btn btn-social-icon " href="https://www.instagram.com/awasthi9903/"><i className="fab fa-instagram fa-2x instacol"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}
