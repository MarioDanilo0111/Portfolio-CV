import { useRef, useState } from "react";
import "../contact/contact.css";
import emailjs from "@emailjs/browser";

import Phone from "../img/phone.png";
import Email from "../img/mail.png";
import Addres from "../img/map.png";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1kclv8w",
        "template_9gb3s0r",
        formRef.current,
        "user_OZssdOFsJJAMdD2lifPiE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Info om mig</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <p>+1 1234 556 75</p>
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              <p>nilovinilo1@gmail.com</p>
            </div>
            <div className="c-info-item">
              <img src={Addres} alt="" className="c-icon" />
              <p>Bondegatan 44A, 654 32 STRÄNGNÄS</p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story</b> Get in touch. Always available for
            freelancing if the right project comes along.me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" id="" />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              id=""
            />
            <input type="text" placeholder="Email" name="user_email" id="" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            <br />
            <br />
            <h4>{done && "Thank you..."}</h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
