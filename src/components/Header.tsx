import Link from "@/components/Link";
import { Flex, Heading, Text } from "@chakra-ui/react";

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
        <Link href="/">
          <Heading as="h1" size="4xl" mb="8px" color="#254d32">
            megan warshofsky
          </Heading>
        </Link>
        <Text color="gray.600">TODO add subline</Text>
      </div>
      <Flex
        direction={["column", "row"]}
        gap={{ base: "8px", lg: "32px" }}
        justify="flex-start"
      >
        <Link href="/">Projects</Link>
        <Link href="/about">About</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
