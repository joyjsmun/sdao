import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

export const { chains, publicClient } = configureChains(
  [sepolia],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: "https://rpc.tenderly.co/fork/df65104f-0339-47c4-b4fb-4d91cda2d570",
      }),
    }),
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID as string }),
    // publicProvider(),
  ]
);

export const { connectors } = getDefaultWallets({
  appName: "SupremeDAO",
  projectId: "3708dfbebb6e80b01917f1c8b75ecbd5",
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full mx-auto ">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}
