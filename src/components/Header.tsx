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
          <Heading as="h1" size="2xl" mb="8px">
            Megan Warshofsky
          </Heading>
        </Link>
        <Text color="gray.600">TODO add subline</Text>
      </div>
      <Flex
        direction={["column", "row"]}
        gap={{ base: "8px", lg: "32px" }}
        justify="flex-start"
      >
        <Link href="/contact">Get in Touch</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
