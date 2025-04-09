import { motion } from "framer-motion";
import { FaSolarPanel, FaBuilding, FaHome } from "react-icons/fa";
import "../css/project.css";

// Import your project images (assuming they're in the same directory)
import nairobiSolar from "../assets/images/s1.jpeg";
import karenResidence from "../assets/images/i1.jpeg";
import mombasaIndustrial from "../assets/images/i2.jpg";

const projects = [
  {
    title: "Nairobi Solar",
    type: "Commercial Solar",
    icon: <FaBuilding size={24} />,
    description:
      "Rooftop solar installation for  business complex.",
    image: nairobiSolar, // Reference to imported image
  },
  {
    title: "Residence Electrification",
    type: "Residential Electrical",
    icon: <FaHome size={24} />,
    description: "Complete smart home electrical system with backup solutions.",
    image: karenResidence, // Reference to imported image
  },
  {
    title: "Industrial Electric Installation",
    type: "Industrial Installation",
    icon: <FaSolarPanel size={24} />,
    description: "ground-mounted Installation for manufacturing facility.",
    image: mombasaIndustrial, // Reference to imported image
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects-page"
    >
      <section className="projects-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>See how we've powered Kenya's homes and businesses</p>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="project-image">
                  {/* Image inserted here */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img" // Add this class to your CSS
                  />
                  <div className="project-type">
                    {project.icon}
                    <span>{project.type}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
