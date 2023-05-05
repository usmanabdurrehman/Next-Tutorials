import "../styles/globals.css";
import type { AppProps } from "next/app";

import { NhostProvider, NhostClient } from "@nhost/nextjs";
import { ChakraProvider } from "@chakra-ui/react";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
        <Component {...pageProps} />
      </NhostProvider>
    </ChakraProvider>
  );
}

export default MyApp;
