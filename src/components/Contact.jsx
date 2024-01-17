import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "./Map";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v7kmu2h",
        "template_cnz7k6i",
        form.current,
        "NcrX6DbSqWEmy6RA3"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error("Ops Message Not Sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_contact">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Contact</span>
                <h1>Contact</h1>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          <Map />
          {/* MENU WRAP */}

          <div className="fields">
            <form
              className="contact_form"
              id="myForm"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="first">
              
                <ul>
                  <li>
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Name" required/>
                  </li>
                  {/* END FIRST NAME */}

                  <li>
                  <label htmlFor="email" className="form-label">Email:</label>
                    <input 
                      type="email"
                      id="email"
                      name="user_email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  {/* END EMAIL */}

                  <li>
                  <label htmlFor="message" className="form-label">Message:</label>
                    <textarea
                      name="message"
                      type="text"
                      id="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </li>
                  {/* END SUBJECT MESSAGE */}
                </ul>
              </div>
              <div className="tokyo_tm_button">
                <button type="submit" className="ib-button">
                  Send Message
                </button>
              </div>
              {/* END SUBMIT BUTTON */}
            </form>
            {/* END FORM */}
          </div>
          {/* END FIELDS */}
        </div>
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
