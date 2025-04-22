'use client';

import React from 'react';

import { PrivyProvider as PrivyAuthProvider } from '@privy-io/react-auth';
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';
import { bsc } from 'viem/chains';

const solanaConnectors = toSolanaWalletConnectors({
    shouldAutoConnect: false,
});

export function PrivyProvider({ children, ...props }: { children: React.ReactNode }) {
    return (
        <PrivyAuthProvider
            {...props}
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
            config={{
                // Customize Privy's appearance in your app
                appearance: {
                    theme: 'light',
                    accentColor: '#676FFF',
                    walletChainType: "ethereum-and-solana",
                    logo: "/logos/omnis-logo-full-1.svg",
                    showWalletLoginFirst: true,
                    walletList: ['phantom', 'backpack', 'solflare', 'rainbow', 'coinbase_wallet', 'metamask', 'uniswap', 'universal_profile', 'wallet_connect']
                },

                solanaClusters: [{ name: 'devnet', rpcUrl: 'https://api.devnet.solana.com' }],

                externalWallets: {
                    solana: {
                        connectors: solanaConnectors,
                    },
                },

                // Only allow wallet login
                loginMethods: ["wallet"],

                embeddedWallets: {
                    solana: {
                        createOnLogin: "off",
                    },
                },

                supportedChains: [bsc],
                defaultChain: bsc,
            }}
        >
            {children}
        </PrivyAuthProvider>
    );
}