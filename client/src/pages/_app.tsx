import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import defaultTheme from "@/config/theme";
import { wagmiConfig } from "@/config/wagmi";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider theme={defaultTheme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
