import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/contactform.css";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message."));
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
        <textarea name="message" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" className="btn">
        Send Message
      </button>
    </motion.form>
  );
}
