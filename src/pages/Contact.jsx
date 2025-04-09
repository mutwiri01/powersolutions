import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../css/contactpage.css";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We're ready to power your next project</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <motion.div
            className="grid-two-column"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h2>Contact Information</h2>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+254 793609535</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>mwekipowersolutions@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
