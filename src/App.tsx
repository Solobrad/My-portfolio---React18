import { useEffect, useState } from "react";

import "./App.css";
import Header, { ResumeData } from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume/Resume";
import "./global.css"; // This should work
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  // const { colorMode } = useColorMode();
  // const [count, setCount] = useState(0);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    const getResumeData = async () => {
      try {
        const response = await fetch("/resumeData.json");
        const data = await response.json();
        setResumeData(data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching the resume data:", error);
      }
    };

    getResumeData();
  }, []); // Empty dependency array means it will only run on component mount

  if (!resumeData) return <div>Loading...</div>;

  return (
    <>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Skills data={resumeData.resume} />
      <Footer />
    </>
  );
}

export default App;
