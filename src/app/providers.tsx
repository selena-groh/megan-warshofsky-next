"use client";

import { system } from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";

export default function Providers(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      {/* <ThemeProvider attribute="class" disableTransitionOnChange> */}
      {props.children}
      {/* </ThemeProvider> */}
    </ChakraProvider>
  );
}
