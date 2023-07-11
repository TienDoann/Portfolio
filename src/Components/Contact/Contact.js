import './contact.css'
import emailjs from "@emailjs/browser";
import { mailConfig } from '../../Config/Email';

function Contact() {
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
  return (
    <div>
      <form class="form" onSubmit={onSubmit}>
        <input class="input" type="text" placeholder="Your Mail" name="email"
          id="email" />
        <input class="input" placeholder="Subject" name="subject"
          type="text"
          id="subject" />
        <textarea class="textarea" placeholder="Enter message" name="message"
          id="message"
          rows={8}></textarea>
        <center><button class="sub" id='sub' type="submit" >Submit</button></center>
      </form>
    </div>
  );
}
export default Contact;
