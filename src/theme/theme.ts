import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(
  defaultConfig
  // {
  // theme: {
  //   tokens: {
  //     fonts: {
  //       heading: { value: `'Roboto Serif', serif` },
  //       body: { value: `'system-ui', sans-serif` },
  //       mono: { value: `'Menlo', monospace` },
  //     },
  //   },
  // },
  // }
);

// export const buttonTheme = defineStyleConfig({
//   variants: {
//     primary: defineStyle({
//       background: "primary",
//     }),
//   },
//   defaultProps: {
//     colorScheme: "primary",
//   },
// });

// const theme = extendTheme({
//   config: {
//     initialColorMode: "light",
//     useSystemColorMode: false,
//   },
//   styles: {
//     global: {
//       ul: {
//         listStyleType: "none",
//         margin: 0,
//         padding: 0,
//       },
//     },
//   },
//   colors: {
//     primary: {
//       50: "#C6A15B",
//       500: "#A2813C",
//       900: "#8A6619",
//     },
//   },
//   fonts: {
//     body: "system-ui, sans-serif",
//     heading: "Roboto Serif, serif",
//     mono: "Menlo, monospace",
//   },
//   components: {
//     Heading: {
//       sizes: {
//         "2xl": {
//           fontWeight: "normal",
//           marginBottom: "16px",
//         },
//         xl: {
//           fontWeight: "light",
//           marginBottom: "16px",
//         },
//         lg: {
//           fontWeight: "light",
//           marginBottom: "12px",
//         },
//         md: {
//           fontWeight: "normal",
//         },
//       },
//     },
//     Link: {
//       baseStyle: {
//         color: "primary.900",
//         _hover: { textDecorationThickness: "1px", color: "primary.500" },
//         transition: "color 200ms",
//       },
//       variants: {
//         icon: {
//           color: "gray.800",
//           _hover: { textDecorationThickness: "1px", color: "primary.900" },
//           transition: "color 200ms",
//         },
//         inverse: {
//           color: "white",
//           _hover: { textDecorationThickness: "1px", color: "white" },
//         },
//       },
//     },
//     Button: buttonTheme,
//     IconButton: buttonTheme,
//   },
// });
