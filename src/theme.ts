// theme.js
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark", // Set default to dark
  useSystemColorMode: false, // Disable automatic system detection
};

const theme = extendTheme({ config });

export default theme;
