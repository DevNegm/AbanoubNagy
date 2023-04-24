import React from "react";

function Contact() {
  return (
    <main>
 <section className="contact" id="contact">
      <div className="contact-content">
        <h1 className="contact-main">Contact</h1>
        <div className="contact-form">
          <div className="contact-right">
            <h1>Get in Touch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              reiciendis accusantium culpa consequatur dolorem quibusdam.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              reiciendis accusantium culpa consequatur dolorem quibusdam.
            </p>
            <div className="contact-icons">
              <a href="#">
                <i className="fa-brands fa-whatsapp-square"></i>
              </a>
              <a href="#">
                <i className="fa-solid fa-square-envelope"></i>
              </a>
            </div>
          </div>
          <form>
            <label for="name">Your Name</label>
            <input type="text" id="name" className="input-field" />
            <label for="email">Your Email</label>
            <input type="text" id="email" className="input-field" />
           
            <label for="message">Message</label>
            <textarea rows="5" id="message"></textarea>
            <a href="#" className="contact-btn">
              Send
            </a>
          </form>
        </div>
      </div>
    </section>
    </main>
   
  );
}

export default Contact;
