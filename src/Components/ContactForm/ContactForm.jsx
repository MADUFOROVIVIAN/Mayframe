import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactForm.module.css";
import phone from "../../Assests/phone.png";
import mail from "../../Assests/mail.png";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Response = () => {
  return <p>Your message have been sent successfuly.</p>;
};

const ContactForm = () => {
  const [response, showResponse] = useState(false, true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jzsgq2",
        "template_plgakil",
        form.current,
        "syKVdolGKR2P8h6zV"
      )
      .then(
        (response) => {
          console.log(response.text);
          console.log("Your message has been sent successfuly.");
        },
        (error) => {
          console.log(error.text);
          console.log("Messae not sent");
        }
      );

    form.current.reset();
    showResponse(true);
  };
  setTimeout(() => {
    showResponse(false);
  }, 5000);

  return (
    <div className={style.container}>
      <div className={style.contactText}>
        <h1>Get In Touch With Us</h1>
      </div>

      <div className={style.contactFlex}>
        <div className={style.flexText}>
          <p>
            We would love to speak with you. Feel free to reach out using the
            details below
          </p>

          <div className={style.call}>
            <div className={style.callImage}>
              <img src={phone} alt="call" />
              <div className={style.call2}>
                <img src={phone} alt="call" />
              </div>
            </div>
            <div className={style.callNum}>
              <p>+2348066758355, 09050507071, 08024443466</p>
            </div>
          </div>

          <div className={style.mail}>
            <div className={style.mailImage}>
              <img src={mail} alt="Mail" />
            </div>
            <div className={style.mailtext}>
              <p>consulting@mayframe-group.com</p>
            </div>
          </div>

          <div className={style.schedule}>
            <h2>Hours</h2>
            <p>Mon-Sat 9:00AM - 5:00PM</p>
          </div>

          <div className={style.follow}>
            <h2>Follow Us</h2>
            <div className={style.socials}>
              <FaSquareTwitter className={style.xIcon} />
              <FaInstagramSquare className={style.instaIcon} />
              <FaLinkedin className={style.inIcon} />
              <FaSquareFacebook className={style.fbIcon} />
            </div>
          </div>
        </div>

        <div className={style.flexForm}>
          <form ref={form} onSubmit={sendEmail}>
            <textarea type="text" name="Full_name" placeholder="Full Name" />
            <br />
            <textarea type="email" name="Email" placeholder="Email Address" />
            <br />
            <textarea type="phone" name="Phone" placeholder="Phone Number" />
            <br />
            <textarea
              type="text"
              name="Message"
              placeholder="Message"
              className={style.message}
            />
            <br />
            <div className={style.formButton}>
              <button>Send Message</button>
            </div>
            <div className={style.row}>{response ? <Response /> : null} </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
