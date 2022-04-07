import React from "react";
import {
  Box,
  Text,
  Heading,
  Grid,
  useColorMode,
  IconButton,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaLinux } from "react-icons/fa";
import { FaNodeJs, FaWordpress } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiGithub,
  SiHeroku,
  SiNextdotjs,
  SiCss3,
  SiWindowsterminal,
  SiFirebase,
  SiCpanel,
  SiMicrosoftpowerpoint,
  SiFigma,
  SiAdobeillustrator,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FloatInWrapper,
} from "../../components/Navbar/Navbar.style";

const frontendTech = [
  {
    techName: "HTML",
    iconButton: <AiFillHtml5 size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "CSS",
    iconButton: <SiCss3 size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "JavaScript",
    iconButton: <SiJavascript size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "React",
    iconButton: <SiReact size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "Next JS",
    iconButton: <SiNextdotjs size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "Wordpress",
    iconButton: <FaWordpress size="22" color={"#FFFFFF"} />,
  },
];

const backendTech = [
  {
    techName: "Node",
    iconButton: <FaNodeJs size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "MySql",
    iconButton: <GrMysql size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "Postgres",
    iconButton: <SiPostgresql size="22" color={"#FFFFFF"} />,
  },
];

const ciTech = [
  {
    techName: "Linux",
    iconButton: <FaLinux size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "CLI",
    iconButton: <SiWindowsterminal size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "Git",
    iconButton: <SiGithub size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "Heroku",
    iconButton: <SiHeroku size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "Firebase",
    iconButton: <SiFirebase size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "cPanel",
    iconButton: <SiCpanel size="22" color={"#FFFFFF"} />,
  },
];

const othersTech = [
  {
    techName: "Figma",
    iconButton: <SiFigma size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "Powerpoint",
    iconButton: <SiMicrosoftpowerpoint size="22" color={"#FFFFFF"} />,
  },
  {
    techName: "Illustrator",
    iconButton: <SiAdobeillustrator size="22" color={"#FFFFFF"} />,
  },
];

function SkillsPage() {
  const { colorMode } = useColorMode();

  let StackCard = ({
    title,
    id,
    gradColor1 = "#4575f8",
    gradColor2 = "#275cf1",
    techKnown = frontendTech,
    mt = 0,
  }) => {
    const gradient = `linear(to-l, ${gradColor1}, ${gradColor2})`;
    return (
      <Box
        display={"flex"}
        flexDir={"column"}
        id={id}
        justifyContent={"center"}
        alignItems={"center"}
        mt={mt}
      >
        <Heading
          color={colorMode === "dark" ? "#fafafb" : "#fafafb"}
          fontSize={24}
          mt={2}
          padding={4}
          bgGradient={gradient}
          width={["100vw", "100%", "100%", "100%"]}
          textAlign={"center"}
          boxShadow="0px 2px 10px 5px rgba(33, 37, 43, 0.3)"
        >
          {title}
        </Heading>
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(5, 1fr)",
          ]}
          height={["auto", "auto", "50px", "50px"]}
          gap={4}
          mt={5}
          mr={10}
        >
          {techKnown.map(item => (
            <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"160px"}
              height={"40px"}
              background={"black"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
            >
              <Text fontSize={13} fontWeight={"bold"} color={"#FFFFFF"}>
                {item.techName}
              </Text>
              <IconButton
                aria-label="Search database"
                icon={item.iconButton}
                background={"transparent"}
                size={10}
              />
            </Box>
          ))}
        </Grid>
      </Box>
    );
  };

  return (
    <>
      <Box>
        <Heading textAlign={"center"} mt={5} mb={10}>
          My Skills 🗃️
        </Heading>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={[5, 5, 10, 50]}
          mt={5}
          mr={[0, 0, 5, 5]}
          mb={5}
          padding={2}
          ml={[0, 0, 2, 2]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <FloatInWrapper>
            <StackCard
              title={"Frontend"}
              techKnown={frontendTech}
              gradColor1={"#7928CA"}
              gradColor2={"#FF0080"}
            />
          </FloatInWrapper>
          <FloatInWrapper>
            <StackCard
              title={"Backend"}
              techKnown={backendTech}
              gradColor1={"#ff9f05"}
              gradColor2={"#FF0080"}
            />
          </FloatInWrapper>

          

          <FloatInWrapper>
            <StackCard
              title={"CI/CD"}
              techKnown={ciTech}
              gradColor1={"#4474f8"}
              gradColor2={"#23a455"}
            />
          </FloatInWrapper>

          <FloatInWrapper>
            <StackCard
              title={"Others"}
              techKnown={othersTech}
              gradColor1={"#ff3954"}
              gradColor2={"#f84848"}
            />
          </FloatInWrapper>

          
        </Grid>
        <Box mt={5} mb={20} padding={10} textAlign={"center"} lineHeight={2}>
          <Heading fontSize={[18, 18, 22, 24]}>
            I'm also introduced to -
          </Heading>
          <UnorderedList>
            <ListItem mt={2}>Languages: Java, Python, C</ListItem>
            <ListItem>Framework / Libs: React Native, Flutter</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
}

export default SkillsPage;
