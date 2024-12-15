import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
  return (
    <Flex
      is="header"
      mb="32px"
      direction={{ base: "column", lg: "row" }}
      gap="16px"
      alignItems="center"
      justifyContent="space-between"
      textAlign={{ base: "center", lg: "left" }}
    >
      <div>
        <Box display="flex" gap="2px">
          <Heading as="h1" size="2xl" mb="8px">
            Megan Warshofsky
          </Heading>
        </Box>
        <Text color="gray.600">TODO add subline</Text>
      </div>
      <Flex
        direction={["column", "row"]}
        gap={{ base: "8px", lg: "32px" }}
        justify="flex-start"
      >
        <Link as={NextLink} href="/">
          Home
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;