import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImage from "../assets/images/lg3.png";
import "../css/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="header"
    >
      <div className="container">
        <Link to="/" className="logo">
          <img
            src={logoImage}
            alt="Mweki Power Solutions Logo"
            className="logo-img"
          />
          Mweki Power Solutions
        </Link>

        {isMobile ? (
          <>
            <button className="hamburger" onClick={toggleMenu}>
              <span
                className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
              ></span>
            </button>

            <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
              <nav>
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
                <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link
                  to="/contact"
                  className="btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </nav>
            </div>
          </>
        ) : (
          <nav className="desktop-nav">
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact" className="btn">
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </motion.header>
  );
}
