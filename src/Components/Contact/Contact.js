import './contact.css'
import emailjs from "@emailjs/browser";
import {useState} from 'react';
import { mailConfig } from '../../Config/Email';

function Contact() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }


  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(mailConfig.EmailServicesID, mailConfig.EmailTempleID, e.target, mailConfig.PublicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
    e.target.reset()
  };

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    }
    else{
      setError(null);
    }

    setEmail(event.target.value);
  }
  return (
    <div>
      <h1 style={{ color: 'white' }}>Contact me</h1>
      <form className="form" onSubmit={onSubmit}>
        <input className="input" type="text" placeholder="Your Mail" name="email" required onChange={handleChange} value={email}
          id="email" />
            {error && <p style={{color: 'red',fontSize:'15px'}}>{error}</p>}
        <input className="input" placeholder="Title" name="subject" required
          type="text"
          id="subject" />
        <textarea className="textarea" placeholder="Enter message" name="message" required style={{resize:'none'}}
          id="message"
          rows={8}></textarea>
        <center><button className="sub" id='sub' type="submit" >Submit</button></center>
      </form>
    </div>
  );
}
export default Contact;
