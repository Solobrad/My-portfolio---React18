import { Component } from "react";
import { ResumeData } from "../Header";
import "./Skills.css";
import { Text } from "@chakra-ui/react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

type SkillsProps = {
  data: ResumeData["resume"];
};

class Skills extends Component<SkillsProps> {
  componentDidMount() {
    // Initialize AOS animations
    AOS.init({
      duration: 500, // Duration of the animations
      once: false, // Allow animations to happen multiple times
      offset: 500, // Start the animation when 200px from the bottom of the viewport
    });
  }
  render() {
    if (!this.props.data) return null;

    const { skills: skillsData } = this.props.data;

    const skillsElements = Object.keys(skillsData).map(function (category) {
      return (
        <div key={category} className="skills-category">
          <h3 className="fancy-heading">{category}</h3>
          <ul className="skills-grid">
            {skillsData[category].map(function (skill) {
              return (
                <div
                  key={skill.name}
                  className="fancy-item"
                  data-aos="zoom-in-up"
                >
                  <span className="skill-name">{skill.name}</span>
                </div>
              ); // Accessing skill.name
            })}
          </ul>
        </div>
      );
    });

    // Added render method
    return (
      <section id="skills">
        <div className="skills-background">
          <div>
            <div className="skills-header">
              <h1>
                <Text fontSize="5xl">Core Competencies</Text>
              </h1>
            </div>

            <div className="nine main-col">
              {/* <p className="skill-desc"></p> */}

              <div className="bars">
                <ul className="skills secondary-text">{skillsElements}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
