import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" p="10px">
      <Image src={logo} w="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
