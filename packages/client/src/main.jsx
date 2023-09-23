import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Index from "./routes";
import Root from "./routes/root";
import Restaurant from "./routes/restaurant";
import RestaurantRegistration from "./routes/restaurant-registration";

import { rootLoader } from "./loader";

import { configureChains, createConfig, sepolia, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "/restaurant/registration",
        element: <RestaurantRegistration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <WagmiConfig config={config}>
        <RouterProvider router={router} />
      </WagmiConfig>
    </ChakraProvider>
  </React.StrictMode>
);
