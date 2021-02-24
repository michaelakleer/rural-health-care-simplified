import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ju1513s",
        "template_lhbmkl6",
        e.target,
        "user_yOjaPfQXiDFbgaUro5NwH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="Contact">
      <div className="container">
        <form onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Name" name="name" />
          <input
            type="email"
            className="email"
            placeholder="Email Address"
            name="email"
          />
          <input
            type="text"
            className="subject"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="form-control"
            id=""
            cols="30"
            rows="8"
            placeholder="Your message"
            name="message"
          >
            {" "}
          </textarea>
          <input type="submit" className="btn btn-info" value="Submit" />
        </form>
      </div>
    </div>
  );
}
