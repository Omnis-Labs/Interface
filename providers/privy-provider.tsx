'use client';

import { PrivyProvider as PrivyAuthProvider } from '@privy-io/react-auth';
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';

const solanaConnectors = toSolanaWalletConnectors({
    // By default, shouldAutoConnect is enabled
    shouldAutoConnect: false,
});

export function PrivyProvider({ children, ...props }: { children: React.ReactNode }) {
    return (
        <PrivyAuthProvider
            {...props}
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || 'cm86tsq50015o5uhcb49yz6op'}
            config={{
                // Customize Privy's appearance in your app
                appearance: {
                    theme: 'dark',
                    accentColor: '#676FFF',
                    walletChainType: 'solana-only',
                    logo: "/omnis-logo-full-white.svg",
                    walletList: ['phantom', 'backpack', 'solflare', 'rainbow', 'coinbase_wallet', 'metamask', 'uniswap', 'okx_wallet', 'universal_profile', 'wallet_connect']
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
                }
            }}
        >
            {children}
        </PrivyAuthProvider>
    );
}