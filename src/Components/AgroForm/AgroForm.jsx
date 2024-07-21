import React, {useRef, useState} from "react";
import style from "./AgroForm.module.css";
import emailjs from '@emailjs/browser';

const Response = () => {
  return(
    <p>Your message have been sent successfuly.</p>
  );
}

const AgroForm = () => {
  const [response, showResponse] = useState (false, true)
  const form = useRef()
  const sendEmail = (e) => {e.preventDefault();
  
    emailjs.sendForm("service_3jzsgq2", "template_plgakil", form.current, "syKVdolGKR2P8h6zV")
    .then(
      (response) => {
        console.log(response.text);
        console.log("Your message has been sent successfuly.")
      },
    (error) => {
      console.log(error.text);
      console.log("Messae not sent")
    }
    );

    form.current.reset();
    showResponse(true);
  };
  setTimeout(() => { showResponse(false); }, 5000);
  return (
    <div className={style.container}>
        <div className={style.driveText}>
          <h3>Start Your Driving Training With Us Now!</h3>
        </div>
        <div className={style.driveForm}>
          <form ref={form} onSubmit={sendEmail}>
            <h3>Contact Us</h3>
            <input type="text" name="Full_name" placeholder="Full Name" /><br />
            <input type="email" name="Email" placeholder="Email Address" /><br />
            <input type="phone" name="Phone" placeholder="Phone Number" /><br />
            <input type="text" name="Message" placeholder="Message" className={style.message}/><br />
            <button>Send Message</button>
            <div className={style.row}>{response ? <Response /> : null } </div>
          </form>
        </div>
      
    </div>
  );
};

export default AgroForm;
