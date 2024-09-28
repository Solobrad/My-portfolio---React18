import { Component } from "react";
import { motion } from "framer-motion";
import "./About.css"; // Import the CSS file
import { Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

type AboutProps = {
  data: {
    name: string;
    image: string;
    bio1: string;
    bio2: string;
    phone: string;
    email: string;
    resumedownload: string;
    project: string; // Include this
    github: string;
  };
};

class About extends Component<AboutProps> {
  render() {
    if (!this.props.data) return null;

    const { name, bio1, bio2, phone, email, resumedownload } = this.props.data;
    const profilepic = `/profile.jpeg`;

    const fadeIn = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1 } },
    };

    return (
      <section id="about">
        <motion.div
          className="about-container"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div>
            <img
              className="profile-pic"
              src={profilepic}
              alt={`${name} Profile Pic`}
            />
          </div>
          <div className="about-content">
            <Text fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
              About Me
            </Text>

            <div className="bio-container">
              <div className="bio-item">
                <FontAwesomeIcon icon={faRobot} className="bio-icon" />
                <p className="bio-description">{bio1}</p>
              </div>
              <div className="bio-item">
                <FontAwesomeIcon icon={faLaptopCode} className="bio-icon" />
                <p className="bio-description">{bio2}</p>
              </div>
            </div>

            <div className="contact-container">
              <div className="contact-details">
                <Text fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
                  Contact Details
                </Text>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="download">
                <p>
                  <a href={resumedownload} className="button">
                    <i></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
}

export default About;
