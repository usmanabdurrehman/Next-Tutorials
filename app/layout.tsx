import { SearchIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import ChakraProviderWrapper from "./ChakraProviderWrapper";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <ChakraProviderWrapper>
          <Navbar />
          {children}
        </ChakraProviderWrapper>
      </body>
    </html>
  );
}
