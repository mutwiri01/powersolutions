import "../css/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Mweki Power Solutions</h3>
            <p>Reliable Power solutions for Kenya's future.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>mwekipowersolutions@gmail.com</p>
            <p>+254 793609535</p>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Mweki Power Solutions. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
