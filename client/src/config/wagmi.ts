import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
    chains: [sepolia],
    connectors: [injected()],
    ssr: true,
    transports: {
        [sepolia.id]: http("https://ethereum-sepolia-rpc.publicnode.com"),
    },
});
