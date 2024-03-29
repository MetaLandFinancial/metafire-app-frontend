// pages/_app.tsx

import type { AppProps } from 'next/app';
import RootLayout from "@/app/layout";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";



function MyApp({ Component, pageProps }: AppProps) {
  return (

        <RootLayout>
          <Component {...pageProps} />
    
          {/* <ConnectButton /> */}
        </RootLayout>

  );
}

export default MyApp;
