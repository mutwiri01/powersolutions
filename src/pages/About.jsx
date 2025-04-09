// About.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUsers,
  FaAward,
  FaBriefcase,
  FaLightbulb,
  FaBolt,
  FaSolarPanel,
} from "react-icons/fa";
import { GiElectricalResistance, GiPowerGenerator } from "react-icons/gi";
import aboutHeroImage from "../assets/images/hero1.png";
import "../css/about.css";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    {
      icon: <FaBriefcase size={40} />,
      value: "30+",
      label: "Years Experience",
    },
    { icon: <FaUsers size={40} />, value: "500+", label: "Clients Served" },
    {
      icon: <FaAward size={40} />,
      value: "20+",
      label: "Qualified Technicians",
    },
  ];

  const teamMembers = [
    {
      name: "Joseph Mwangi Kihungi",
      role: "Founder & CEO",
      expertise: "Electrical Engineering",
      icon: <GiPowerGenerator className="team-icon" />,
    },
    {
      name: "Justus Weru Mwangi",
      role: "Founder & CEO",
      expertise: "Renewable & Non-Renewable Energy Systems",
      icon: <FaSolarPanel className="team-icon" />,
    },
    {
      name: "Raymond Kihungi Mwangi",
      role: "Lead Technician",
      expertise: "Domestic & Industrial Electrical Systems",
      icon: <GiElectricalResistance className="team-icon" />,
    },
  ];

  const specialties = [
    {
      icon: <FaLightbulb size={30} />,
      title: "Residential Solutions",
      description: "Complete home electrical systems and automation",
    },
    {
      icon: <FaBolt size={30} />,
      title: "Commercial Installations",
      description: "Reliable power solutions for businesses",
    },
    {
      icon: <FaSolarPanel size={30} />,
      title: "Solar Energy",
      description: "Sustainable solar power systems",
    },
    {
      icon: <GiPowerGenerator size={30} />,
      title: "Backup Power",
      description: "Uninterrupted power supply solutions",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-image-container">
          <img src={aboutHeroImage} alt="Hero" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.h1
            ref={ref}
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Powering Kenya's Future Since 2000
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reliable energy solutions for homes and businesses in Kenya
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="grid-two-column">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="story-text">
                Founded in Kahawa West Nairobi, Mweki Power Solutions began as a
                small electrical contractor with a vision to bring reliable
                power solutions to Kenya.
              </p>
              <p className="story-text">
                Our journey has been powered by innovation and quality. Today,
                we serve residential, commercial, and industrial clients with
                comprehensive energy solutions.
              </p>
            </motion.div>

            <motion.div
              className="stats-grid"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section">
        <div className="container">
          <motion.h2
            className="section-title center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Specialties
          </motion.h2>
          <div className="specialties-grid">
            {specialties.map((item, index) => (
              <motion.div
                key={index}
                className="specialty-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="specialty-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.h2
            className="section-title center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p
            className="section-subtitle center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The driving force behind our success
          </motion.p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-details">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-expertise">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="mission-statement"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            To provide innovative, reliable, and sustainable power solutions
            that empower communities and drive economic growth across East
            Africa.
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
}
