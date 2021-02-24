import React from "react";
import emailjs from "emailjs-com";
import "./SignUp.css";

export default function SignUp() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ju1513s",
        "template_hcednml",
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
    <div className="SignUp">
      <div className="container">
        <form onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Name" name="name" />
          <input
            type="email"
            className="email"
            placeholder="Email Address"
            name="email"
          />
          <input type="submit" className="btn btn-info" value="Submit" />
        </form>
      </div>
    </div>
  );
}
