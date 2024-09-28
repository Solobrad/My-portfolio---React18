import { Component } from "react";
import { motion } from "framer-motion";
import { ResumeData } from "../Header";
import "./Resume.css";
import { Text } from "@chakra-ui/react";

type ResumeProps = {
  data: ResumeData["resume"];
};

class Resume extends Component<ResumeProps> {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const { skills: skillsData } = this.props.data;

    const educationElements = this.props.data.education.map(function (
      education
    ) {
      return (
        <div key={education.school}>
          <h3 className="org-name">{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p className="desc">{education.description}</p>
        </div>
      );
    });

    const workElements = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3 className="org-name">{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p className="desc">{work.description}</p>
        </div>
      );
    });

    const skillsElements = Object.keys(skillsData).map(function (category) {
      return (
        <div key={category} className="skills-category">
          <h3 className="skill-head fancy-heading">{category}</h3>
          <ul className="skills-grid">
            {skillsData[category].map(function (skill) {
              return (
                <div key={skill.name} className="fancy-item">
                  <span className="skill-name">{skill.name}</span>
                </div>
              ); // Accessing skill.name
            })}
          </ul>
        </div>
      );
    });

    const animationProps = {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.7 },
    };

    return (
      <section id="resume">
        <motion.div
          {...animationProps}
          className="education-container constrain-box"
        >
          <div className="row education">
            <div className="three columns header-col">
              <h1 className="primary-text">
                <Text fontSize="2xl">Education</Text>
                <div className="pulsing-bar" />
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="tmain-col secondary-text">
                  {educationElements}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <hr className="section-divider" />

        <motion.div {...animationProps} className="row skill constrain-box">
          <div className="row work">
            <div className="three columns header-col">
              <h1 className="primary-text">
                <Text fontSize="2xl">Work</Text>
                <div className="pulsing-bar" />
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns main-col secondary-text">
                  {workElements}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <hr className="section-divider" />

        <motion.div {...animationProps} className="row skill constrain-box">
          <div className="row skill">
            <div className="three columns header-col">
              <h1 className="primary-text">
                <Text fontSize="2xl">Skills</Text>
                <div className="pulsing-bar" />
              </h1>
            </div>

            <div className="nine columns main-col">
              <p className="skill-desc"></p>

              <div className="bars">
                <ul className="skills secondary-text">{skillsElements}</ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
}

export default Resume;
