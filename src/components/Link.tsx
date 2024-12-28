import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

type LinkProps = React.ComponentProps<typeof ChakraLink> &
  React.ComponentProps<typeof NextLink>;

function Link({
  children,
  href,
  colorPalette,
  variant,
  display,
  ...props
}: LinkProps) {
  return (
    <ChakraLink
      asChild
      colorPalette={colorPalette}
      variant={variant}
      display={display}
    >
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    </ChakraLink>
  );
}
export default Link;
