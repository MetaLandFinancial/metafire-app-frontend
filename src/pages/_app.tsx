// pages/_app.tsx

import type { AppProps } from 'next/app';
import RootLayout from "@/app/layout";
import { WagmiProvider } from 'wagmi' 
import { wagmiConfig } from './wagmiConfig' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 

const queryClient = new QueryClient() 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={wagmiConfig}> 
      <QueryClientProvider client={queryClient}> 
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
