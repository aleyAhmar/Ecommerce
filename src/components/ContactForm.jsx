import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="container text-center mt-2">
        <h1>Feel Free to Contact Us</h1>
        <p>Don't hesitate in dialing or writing to us. Our representative will be with you shortly</p>
        
        <hr />
      </div>
      <div className="row mt-5">
        <div className="container col-5">
          <div className="container text-center justify-content-around">
            <ul style={{ listStyle: "none" }}>
              <li>
                <img src="" alt="" />
                <h3>Address</h3>
                <p>University of Engineering and Technology, Lahore</p>
              </li>
              <li>
                <img src="" alt="" />
                <h3>Contact Number</h3>
                <p>0300-1234567, 0300-2345678</p>
              </li>
            </ul>
          </div>
        </div>
        <vr className="col-1"/>
        <div className="container col-5">
          <form
            className="rom contact-input"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            action="#"
            method="POST"
          >
            <input
              className="form-control"
              type="text"
              placeholder="USERNAME"
              autoComplete="off"
              name="username"
              required
            />
            <input
              className="form-control"
              type="email"
              placeholder="EMAIL"
              autoComplete="off"
              name="email"
              required
            />
            <textarea
              className="form-control"
              name="message"
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <input className="btn btn-primary" type="submit" value={"SEND"} />
          </form>
        </div>
      </div>

      <div className="container text-center">
        <h1 className="text-center mt-5">Feel Free to Visit Us</h1>
        <hr />
      </div>

      <div className="container flex-column p-5 align-items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.967869994301!2d74.35374337537688!3d31.579928944197494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b273d6ed0c1%3A0x4dcac84ea2200944!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Lahore!5e0!3m2!1sen!2s!4v1700611349334!5m2!1sen!2s"
          width="100%"
          height={450}
          style={{ border: "1px solid blue", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default ContactForm;
