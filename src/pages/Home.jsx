import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../css/home.css";

// Import your background images
import hero1 from "../assets/images/m2.jpg";
import hero2 from "../assets/images/s1.jpeg";
import hero3 from "../assets/images/s3.jpg";
import hero4 from "../assets/images/i1.jpeg";

export default function Home() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgroundImages = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="home">
      <section className="hero">
        {/* Background images with transitions */}
        <div className="hero-backgrounds">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={index}
              className="hero-bg"
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentBgIndex ? 1 : 0,
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="hero-overlay"></div>
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref}
            className="hero-content"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Powering Kenya with <span>Reliable Power Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Expert electrical & solar solutions for homes and businesses.
            </motion.p>
            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/services" className="btn">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
