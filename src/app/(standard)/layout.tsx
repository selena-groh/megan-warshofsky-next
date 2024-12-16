import Header from "@/components/Header";
import { Container, Flex } from "@chakra-ui/react";
import "server-only";

const Layout = ({ children }) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <main>
        <Container
          py={{ base: 8 }}
          px={{ base: 4, md: 8 }}
          maxWidth="1600px"
          margin="auto"
        >
          <Header />
          {children}
        </Container>
      </main>
    </Flex>
  );
};

export default Layout;
