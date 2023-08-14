import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './contact.css'

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qjexf07",
        "template_pnjwa4j",
        form.current,
        "q_LywKNjiEwFXdPnX"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
      <form ref={form} onSubmit={sendEmail}>
        <center><h1>Contact Me</h1></center>
        <label>Name</label>
        <input id="input" type="text" name="user_name" />
        <label>Email</label>
        <input id='input' type="email" name="user_email" />
        <label>Service Required or Suggestion</label>
        <textarea name="message" />
        <input id='input' type="submit" value="Send" />
      </form>
  );
};

export default Contact;



 