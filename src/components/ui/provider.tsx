"use client";

import { ChakraProvider } from "@chakra-ui/react";
import appSystem from "../../theme";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

/*
  system with default configuration:
  <ChakraProvider value={defaultSystem}>

  system with custom configuration:
  <ChakraProvider value={appSystem}>
*/

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={appSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
