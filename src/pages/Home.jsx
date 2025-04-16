import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="home">
      {/* Add this spacer div to account for fixed header */}
      <div className="header-spacer"></div>
      {/* Title Section - First Element */}
      <section className="title-section">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Powering Kenya with Reliable Power Solutions
          </motion.h1>
        </div>
      </section>

      {/* Hero Image Section - Second Element */}
      <section className="hero-image-section">
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
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
        </div>
      </section>

      {/* Content Section - Below Hero Image */}
      <section className="content-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref}
            className="content-wrapper"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Expert electrical & solar solutions for homes and businesses.
            </motion.p>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/services" className="btn btn-primary">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
