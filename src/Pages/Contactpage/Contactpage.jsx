import "./Contactpage.css";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Contactpage = () => {
  const form = useRef();

  const [popUp, setPopUp] = useState(false);
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_twwyj5l", "template_rf180lm", form.current, {
        publicKey: "FDSXdgkm668lEA5FX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMsg("Sent Successfully");
          setPopUp(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMsg(error.text);
          setPopUp(true);
        }
      );
    form.current.reset();
  };

  const clearForm = () => {
    form.current.reset();
  };

  useEffect(() => {
    if (popUp) {
      const timer = setTimeout(() => {
        setPopUp(false);
        setMsg("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [popUp, msg]);

  return (
    <motion.section
      id="contact-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1>Contact</h1>
      <form className="userForm" ref={form} onSubmit={sendEmail}>
        <input
          className="userName"
          type="text"
          name="user_name"
          placeholder="Name"
          required
        />
        <input
          className="userEmail"
          type="email"
          name="user_email"
          placeholder="Email"
          required
        />
        <textarea
          className="userMessage"
          name="message"
          placeholder="Message"
          required
        />
        <div className="btns">
          <input
            className="submitBtn"
            type="button"
            value="Clear"
            onClick={clearForm}
          />
          <input className="submitBtn" type="submit" value="Send" />
        </div>
        <div className={popUp ? "pop-up-message-visible" : "pop-up-message"}>
          {msg}
        </div>
      </form>
    </motion.section>
  );
};

export default Contactpage;
