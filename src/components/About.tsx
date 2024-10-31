import { Component } from "react";
import { motion } from "framer-motion";
import "./About.css"; // Import the CSS file
import { Text } from "@chakra-ui/react";

type AboutProps = {
  data: {
    name: string;
    image: string;
    bio1: string;
    bio2: string;
    bio3: string;
    phone: string;
    email: string;
    resumedownload: string;
    portfolio: string; 
    github: string;
  };
};

class About extends Component<AboutProps> {
  render() {
    if (!this.props.data) return null;

    const { name, bio1, bio2, bio3, email } = this.props.data;
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
            <Text fontSize={{ base: "2xl", md: "3xl" }} mb={12}>
              About Me
            </Text>

            <div className="bio-container">
              <div className="bio-item">
                {/* <FontAwesomeIcon icon={faRobot} className="bio-icon" /> */}
                <div className="bio-vertical-line"></div>
                <p className="bio-description">{bio1}</p>
              </div>
              <div className="bio-item">
                <div className="bio-vertical-line"></div>

                <p className="bio-description">{bio2}</p>
              </div>
              <div className="bio-item">
                <div className="bio-vertical-line"></div>

                <p className="bio-description">{bio3}</p>
              </div>
            </div>

            <div className="contact-container">
              <div className="contact-details"></div>
              <span>{email}</span>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
}

export default About;
