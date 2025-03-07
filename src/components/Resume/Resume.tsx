import { motion } from "framer-motion";
import { ResumeData } from "../Header";
import "./Resume.css";
import { Text } from "@chakra-ui/react";

type ResumeProps = {
  data: ResumeData["resume"];
};

const Resume: React.FC<ResumeProps> = ({ data }) => {
  if (!data) return null;

  const educationElements = data.education.map((education) => (
    <div key={education.school} className="resume-item secondary-text">
      <h3 className="resume-item-title">{education.school}</h3>
      {/* <p className="resume-item-subtitle">
        {education.degree} <span className="bullet">&bull;</span>{" "}
        <em className="resume-date">{education.graduated}</em>
      </p>
      <p className="resume-item-description">{education.description}</p> */}
    </div>
  ));

  const workElements = data.work.map((work) => (
    <div key={work.company} className="resume-item secondary-text">
      <h3 className="resume-item-title">{work.company}</h3>
      {/* <p className="resume-item-subtitle">
        {work.title} <span className="bullet">&bull;</span>{" "}
        <em className="resume-date">{work.years}</em>
      </p>
      <p className="resume-item-description">{work.description}</p> */}
    </div>
  ));

  const programmingLanguageElements = data.programminglanguages.map(
    (language) => (
      <li className="programming-language-item" key={language.name}>
        <em>{language.name}</em>
      </li>
    )
  );

  const animationProps = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <section id="resume">
      <motion.div {...animationProps} className="resume-section-container">
        <div className="resume-row">
          <div className="resume-header-column">
            <h1 className="resume-section-title">
              <Text fontSize="2xl">Education</Text>
              <div className="" />
            </h1>
          </div>

          <div className="resume-content-column">
            <div className="resume-content-wrapper">
              <div className="resume-content">{educationElements}</div>
            </div>
          </div>
        </div>
      </motion.div>

      <hr className="section-divider" />

      <motion.div {...animationProps} className="resume-section-container">
        <div className="resume-row">
          <div className="resume-header-column">
            <h1 className="resume-section-title">
              <Text fontSize="2xl">Work</Text>
              <div className="" />
            </h1>
          </div>

          <div className="resume-content-column">
            <div className="resume-content-wrapper">
              <div className="resume-content">{workElements}</div>
            </div>
          </div>
        </div>
      </motion.div>

      <hr className="section-divider" />

      <motion.div {...animationProps} className="resume-section-container">
        <div className="resume-row">
          <div className="resume-header-column">
            <h1 className="resume-section-title">
              <Text fontSize="2xl">Programming Languages</Text>
              <div className="" />
            </h1>
          </div>

          <div className="resume-content-column">
            <ul className="programming-language-list">
              {programmingLanguageElements}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
