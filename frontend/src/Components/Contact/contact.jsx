import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section id="contact">
      {" "}
      <h1>Contact Me</h1>{" "}
      <form className="contact-form">
        {" "}
        <input type="text" placeholder="Your Name" required />{" "}
        <input type="email" placeholder="Your Email" required />{" "}
        <textarea placeholder="Your Message"></textarea>{" "}
        <button type="submit">Send Message</button>{" "}
      </form>{" "}
    </section>
  );
};
export default Contact;
