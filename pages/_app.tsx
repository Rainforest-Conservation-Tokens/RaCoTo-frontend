import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import {
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import React from "react";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, polygonMumbai],
  [publicProvider()]
);

const projectId = "YOUR_PROJECT_ID";

const { wallets } = getDefaultWallets({
  appName: "Racoto",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "Racoto",
};

const connectors = connectorsForWallets([...wallets]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    setReady(true);
  }, []);
  return (
    <div>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider
            appInfo={demoAppInfo}
            chains={chains}
            modalSize="compact"
            theme={midnightTheme()}
          >
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
