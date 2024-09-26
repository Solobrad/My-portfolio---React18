import { useEffect, useState } from "react";

import "./App.css";
import Header, { ResumeData } from "./components/Header";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";

function App() {
  const { colorMode } = useColorMode();
  const [count, setCount] = useState(0);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  //   main: {
  //     project: "#",
  //     github: "https://github.com/Solobrad",
  //     name: "Nicholas Poon Tze Jian",
  //     description: (
  //       <>
  //         A fervent AI enthusiast, perpetually hungry for mastering AI realms. I
  //         cultivate my expertise to remain cutting-edge by exploring the latest
  //         <Text
  //           as="span"
  //           color="gray.200"
  //           fontSize="3xl"
  //           fontWeight="bold"
  //           textShadow="0 0 5px rgba(255, 165, 0, 0.7)"
  //         >
  //           {" "}
  //           TOOLS{" "}
  //         </Text>
  //         ,
  //         <Text
  //           as="span"
  //           color="gray.200"
  //           fontSize="3xl"
  //           fontWeight="bold"
  //           textShadow="0 0 5px rgba(255, 165, 0, 0.7)"
  //         >
  //           {" "}
  //           MODELS{" "}
  //         </Text>
  //         ,and enlightening{" "}
  //         <Text
  //           as="span"
  //           color="gray.200"
  //           fontSize="3xl"
  //           fontWeight="bold"
  //           textShadow="0 0 5px rgba(255, 165, 0, 0.7)"
  //         >
  //           {" "}
  //           ARTICLES
  //         </Text>
  //       </>
  //     ),
  //   },
  // });

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
      {/* <About data={this.state.resumeData.main} /> */}
    </>
  );
}

export default App;
