import { motion } from "framer-motion";
import {
  FaBolt,
  FaSolarPanel,
  FaTools,
  FaLightbulb,
  FaPlug,
  FaCarBattery,
  FaClipboardCheck,
} from "react-icons/fa";
import "../css/services.css";

export default function Services() {
  const services = [
    {
      icon: <FaBolt size={32} />,
      title: "Electrical Installations",
      items: [
        "Complete wiring of buildings (residential/commercial)",
        "Installation of electrical panels (distribution boards, breakers)",
        "Professional mounting of sockets, switches & light fixtures",
        "Earthing/grounding systems installation",
        "Electrical conduit and trunking works",
        "Backup generator integration",
        "Specialized power outlets for appliances/machines",
        "Installation of energy meters and submeters",
        "Industrial pipework for electrical systems",
      ],
      animation: {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      },
    },
    {
      icon: <FaSolarPanel size={32} />,
      title: "Solar Installations",
      items: [
        "Comprehensive site assessment for solar feasibility",
        "Solar panel mounting (rooftop or ground-mount systems)",
        "Professional installation of photovoltaic (PV) panels",
        "Wiring of solar panels to inverters",
        "Mounting and wiring inverters/charge controllers",
        "Battery bank installation (off-grid/hybrid systems)",
        "Complete grid-tie or off-grid system setup",
        "Earthing and surge protection for solar systems",
        "Net metering setup for grid-tied systems",
      ],
      animation: {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      },
    },
    {
      icon: <FaTools size={32} />,
      title: "Maintenance & Repairs",
      items: [
        "Routine inspection of wiring and components",
        "Replacement of damaged cables, breakers, or fuses",
        "Comprehensive system performance checks",
        "Diagnosis and repair of faulty panels/inverters",
        "Battery maintenance and replacement",
        "Updating installations to meet current regulations",
        "Preventative maintenance programs",
        "Emergency repair services 24/7",
        "Pipework maintenance and repairs",
      ],
      animation: {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
      },
    },
    {
      icon: <FaLightbulb size={32} />,
      title: "Consultation & Design",
      items: [
        "Custom electrical/solar system layout design",
        "Precise sizing of solar panels, batteries, and inverters",
        "Detailed load calculation and energy planning",
        "Comprehensive proposal preparation with cost estimates",
        "Energy efficiency audits and recommendations",
        "Technical drawings and system schematics",
        "Regulatory compliance consulting",
        "Project management services",
        "Pipework system design and optimization",
      ],
      animation: {
        hidden: { rotate: 5, opacity: 0 },
        visible: { rotate: 0, opacity: 1 },
      },
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Comprehensive Services</h2>
          <p className="subtitle">End-to-end power solutions for every need</p>
          <div className="divider"></div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              variants={service.animation}
            >
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <ul className="service-features">
                {service.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="feature-icon">
                      {index === 0 && <FaPlug size={14} />}
                      {index === 1 && <FaCarBattery size={14} />}
                      {index === 2 && <FaTools size={14} />}
                      {index === 3 && <FaClipboardCheck size={14} />}
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="card-footer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
