import { useState } from "react";

const ContactForm = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div>
      <div
        className={`contact-form ${isNavActive ? "active" : ""}`}
        id="contact-form"
      >
        <h2>Contact</h2>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <label>Email address:</label>
        <input type="email" placeholder="Your Email" />
        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;
