import React from "react";
import {
  Box,
  Heading,
  useColorMode,
  Image,
  Text,
  Grid,
  Button,
} from "@chakra-ui/react";

import dhLogo from "../../../imgs/dh.png";
import bpLogo from "../../../imgs/bp.png";
import botLogo from "../../../imgs/bot.png";


function ExperienceSection() {
  const { colorMode } = useColorMode();

  console.count("Experience section renderd");

  let expArr = [
    {
      id: 1,
      title: "Delivery Hobe",
      logo: dhLogo,
      time: "(2021 - ?)",
      designation: "JavaScript Developer",
      body: `I've been working as a junior js developer at "Delivery Hobe" since October, 2021. It's a hyper local e-commerce platform focused on 1hr deliveries within Dhaka city`,
      link: "https://www.deliveryhobe.com/",
      gradColor1: '#f9553e',
      gradColor2: '#fe9909'
    },
    {
        id: 2,
        title: "BUTEX NoteBOT",
        logo: botLogo,
        time: "(2018 - ?)",
        designation: "Founder",
        body: `I've founded BUTEX NoteBOT in 2018, it's a 24x7 educational content delivery chatbot.Through this time it has served thousands of students with their studies`,
        link: "https://www.deliveryhobe.com/",
        gradColor1: '#23a455',
        gradColor2: '#3bad67'
      },
    {
      id: 3,
      title: "Bondi Pathshsala",
      logo: bpLogo,
      time: "(2020 - 2021)",
      designation: "Web Developer",
      body: `I was responsible for maintaining the whole web platform of Bondi Pathshsala since 2020 - 2021, It has helped more than 2 million students with their studies so far`,
      link: "https://www.bondipathshala.com.bd/",
      gradColor1: '#4978f9',
      gradColor2: '#275cf1'
    },
  ];

  let ExpCard = ({ title, id, designation, logo, body, link, time, gradColor1="#4575f8", gradColor2="#275cf1" }) => {
      const gradient = `linear(to-l, ${gradColor1}, ${gradColor2})`
    return (
      <Box
        display={"flex"}
        flexDir={"column"}
        id={id}
        justifyContent={"center"}
        alignItems={"center"}
        
      >
        <Heading
          color={colorMode === "dark" ? "#fafafb" : "#fafafb"}
          fontSize={24}
          mt={2}
          padding={4}
          bgGradient={gradient}
          width={['100vw','100%','100%','100%']}
          textAlign={'center'}
        >
          {title}
        </Heading>
        <Image src={logo} alt={title} width={"64px"} height={"64px"} mt={5}/>
        <Text mt={2} color={colorMode === "dark" ? "#fafafb" : "#fafafb"} fontWeight={'bold'}>
          {designation}
        </Text>
        <Text color={colorMode === "dark" ? "#fafafb" : "#fafafb"} background={'black'} paddingX={2} mt={1}>{time}</Text>
        <Text mt={1} color={colorMode === "dark" ? "#fafafb" : "#fafafb"} ml={2} mr={2} height={'100px'}>
          {body}
        </Text>
        <Button as={"a"} href={link} cursor={"pointer"} mt={2}>
          Learn More
        </Button>
      </Box>
    );
  };

  return (
    <Box
      background={colorMode === "dark" ? "#333645" : "#3b3d47"}
      paddingTop={[5, 5, 5, 10]}
      paddingBottom={[5, 5, 5, 20]}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading color={colorMode === "dark" ? "#fafafb" : "#fafafb"}>
        Experience
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={[5,5,10,50]}
        mt={5}
        mr={[0, 0, 5, 5]}
        mb={5}
        padding={2}
        ml={[0, 0, 2, 2]}
        alignItems={'center'}
        justifyContent={'center'}   
      >
        {expArr.map(item => (
          <ExpCard
            key={item.id}
            title={item.title}
            designation={item.designation}
            logo={item.logo}
            body={item.body}
            link={item.link}
            time={item.time}
            gradColor1={item.gradColor1}
            gradColor2={item.gradColor2}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default ExperienceSection;
