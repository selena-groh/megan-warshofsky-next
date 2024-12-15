import "server-only";
import React from "react";
import { Heading } from "@chakra-ui/react";

export default async function Page() {
  return (
    <div>
      <Heading as="h2" size="lg" mb="16px">
        Home
      </Heading>
      <p>TODO add information here</p>
    </div>
  );
}
