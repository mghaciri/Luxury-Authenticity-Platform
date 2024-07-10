'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,  // pour créer d'une config par défaut
  RainbowKitProvider, // fournit les éléments aux composants enfants
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';  // RainbowKit se base sur Wagmi

import {
  hardhat,
  sepolia
} from 'wagmi/chains';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const config = getDefaultConfig({
  appName: 'Luxury Authenticity Platform',
  projectId: '2369a2d606efd133dba6314678b831c8',
  chains: [hardhat, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

// Provider
const RainbowKitAndWagmiProvider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
                {children}
            </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  )
}

export default RainbowKitAndWagmiProvider