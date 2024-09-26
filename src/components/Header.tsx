import React, { Component } from "react";
import { Box, Text, Link, Button, HStack, Icon } from "@chakra-ui/react";
import { FaBook, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";

export type ResumeData = {
  main: {
    project: string;
    github: string;
    name: string;
    image: string; // Added image property
    bio: string; // Added bio property
    phone: string; // Added phone property
    email: string; // Added email property
    resumedownload: string; // Added resumedownload property
    description: {
      text: string; // Regular text with placeholders for highlighted words
      highlighted: string[]; // Array of highlighted words
    };
  };
};

type HeaderProps = {
  data: ResumeData["main"];
};

class Header extends Component<HeaderProps> {
  render() {
    if (!this.props.data) return null;

    const { project, github, name } = this.props.data;

    return (
      <Box
        id="header"
        height="100vh"
        width="100%"
        backgroundImage="url('/Neural_Network2.jpeg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box
          as="nav"
          id="nav-wrap"
          p={4}
          width="100%"
          position="absolute"
          top={0}
          zIndex={1}
        >
          <HStack spacing={8} display={{ base: "block", md: "none" }}>
            <Link
              className="mobile-btn"
              href="#nav-wrap"
              title="Show navigation"
            >
              Show navigation
            </Link>
            <Link className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </Link>
          </HStack>

          <HStack
            id="nav"
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Link href="#home" className="smoothscroll">
              Home
            </Link>
            <Link href="#about" className="smoothscroll">
              About
            </Link>
            <Link href="#resume" className="smoothscroll">
              Resume
            </Link>
            <Link href="#portfolio" className="smoothscroll">
              Works
            </Link>
            <Link href="#contact" className="smoothscroll">
              Contact
            </Link>
          </HStack>
        </Box>
        <Box className="row banner" textAlign="center" py={10}>
          <Box className="banner-text">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Text as="h1" fontSize="6xl" fontWeight="bold" mb={8}>
                {name}
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Box
                bg="rgba(128, 128, 128, 0.7)"
                borderRadius="md"
                p={4}
                width={{ base: "80%", lg: "60%" }}
                mx="auto"
              >
                <Text
                  as="h3"
                  fontSize={{ base: "2xl", lg: "3xl" }}
                  textAlign="center"
                  color="white"
                >
                  As a fervent AI Engineer, I'm perpetually driven to master the
                  evolving realms of{" "}
                  <Text
                    as="span"
                    color="gray.200"
                    fontSize="3xl"
                    fontWeight="bold"
                    textShadow="0 0 5px rgba(255, 165, 0, 0.7)"
                  >
                    AI
                  </Text>
                  . Refining my expertise at the forefront by traversing latest{" "}
                  <Text
                    as="span"
                    color="gray.200"
                    fontSize="3xl"
                    fontWeight="bold"
                    textShadow="0 0 5px rgba(255, 165, 0, 0.7)"
                  >
                    TOOLS
                  </Text>
                  ,{" "}
                  <Text
                    as="span"
                    color="gray.200"
                    fontSize="3xl"
                    fontWeight="bold"
                    textShadow="0 0 5px rgba(255, 165, 0, 0.7)"
                  >
                    MODELS
                  </Text>
                  , and enlightening{" "}
                  <Text
                    as="span"
                    color="gray.200"
                    fontSize="3xl"
                    fontWeight="bold"
                    textShadow="0 0 5px rgba(255, 165, 0, 0.7)"
                  >
                    ARTICLES
                  </Text>
                </Text>
              </Box>
            </motion.div>
            <hr />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <HStack spacing={4} justifyContent="center" mt={10}>
                <Link href={project} isExternal>
                  <Button
                    colorScheme="teal"
                    leftIcon={<Icon as={FaBook} boxSize={6} />}
                    height="60px"
                    width="160px"
                    fontSize="xl"
                  >
                    Project
                  </Button>
                </Link>
                <Link href={github} isExternal>
                  <Button
                    colorScheme="gray"
                    leftIcon={<Icon as={FaGithub} boxSize={9} />}
                    height="60px"
                    width="160px"
                    fontSize="xl"
                  >
                    Github
                  </Button>
                </Link>
              </HStack>
            </motion.div>
          </Box>
        </Box>
        <Box textAlign="center" position="absolute" bottom="30px">
          <Link className="smoothscroll" href="#about">
            <Icon as={AiOutlineArrowDown} boxSize={12} />
          </Link>
        </Box>
      </Box>
    );
  }
}

export default Header;
