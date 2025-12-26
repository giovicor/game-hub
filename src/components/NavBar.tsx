import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import { NavLink } from "react-router";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack p={5}>
      <NavLink to="/">
        <Image src={logo} w="60px" objectFit="cover" />
      </NavLink>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
