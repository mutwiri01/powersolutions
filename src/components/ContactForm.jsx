import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/contactform.css";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    const serviceId = "service_g2hwqgn"; 
    const templateId = "template_3lepj6j"; 
    const publicKey = "eQHx2AC5c0ese1WSk"; 

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset(); // Reset the form after successful send
      },
      (error) => {
        console.error("Failed to send message:", error.text);
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="contact-form"
    >
      <div className="form-group">
        <input type="text" name="user_name" placeholder="Full Name" required />
      </div>
      <div className="form-group">
        <input type="email" name="user_email" placeholder="Email" required />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
        ></textarea>
      </div>
      <button type="submit" className="btn">
        Send Message
      </button>
    </motion.form>
  );
}
