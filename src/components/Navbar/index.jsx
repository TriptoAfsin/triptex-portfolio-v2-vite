import React, { useState } from "react";
import { Box, Text, Link, Stack, Image, Flex } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import logo from "../../imgs/logo192.png";
import {
  FloatLeftWrapper,
  FloatRightWrapper,
} from "./Navbar.style";
import DarkModeButton from "../DarkModeButton";

const Logo = props => {
  return (
    <FloatLeftWrapper>
      <Box {...props} display={'flex'} flexDirection={'row'}>
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Afshin Nahian Tripto"
            width={"40px"}
            height={"40px"}
          />
        </Link>
      </Box>
    </FloatLeftWrapper>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle} transition='ease-in 1s'>
      {isOpen ? (
          <FloatLeftWrapper>
        <MdClose size="25" color="#f8f8f8" />
        </FloatLeftWrapper>
      ) : (
        <FloatRightWrapper>
        <BiMenuAltLeft size="30" />
        </FloatRightWrapper>
      )}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <FloatRightWrapper>
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </FloatRightWrapper>
  );
};

// const MenuItemList = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <Box
//       display={{ base: isOpen ? "block" : "none", md: "block" }}
//       flexBasis={{ base: "100%", md: "auto" }}
//     >
//       <Stack
//         spacing={8}
//         align="center"
//         justify={["center", "space-between", "flex-end", "flex-end"]}
//         direction={["column", "row", "row", "row"]}
//         pt={[4, 4, 0, 0]}
//       >
//         <MenuItem to="/">Home</MenuItem>
//         <MenuItem to="/how">CV</MenuItem>
//         <MenuItem to="/projects">Projects</MenuItem>
//         <MenuItem to="/contact">Contact</MenuItem>
//       </Stack>
//     </Box>
//   );
// };

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={[4, 4, 6, 6]}
      bg={["#4949f3", "#4949f3", "#4949f3"]}
      color={["white", "white", "primary.700", "primary.700"]}
      boxShadow="0px 2px 10px 5px rgba(33, 37, 43, 0.3)"
      // position="fixed"

      {...props}
    >
      {children}
    </Flex>
  );
};

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <NavBarContainer {...props}>
        <Logo />

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/cv/Afshin Nahian Tripto-WebDev.pdf">CV</MenuItem>
            <MenuItem to="/skills">Skills</MenuItem>
            <MenuItem to="mailto:afsintripto@gmail.com">Hire Me</MenuItem>
            <MenuItem to="/about">About Me</MenuItem>
            <DarkModeButton />
          </Stack>
        </Box>

        <MenuToggle toggle={toggle} isOpen={isOpen} />
      </NavBarContainer>
    </>
  );
}

export default Navbar;
