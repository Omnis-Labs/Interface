import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    bsc,
} from 'wagmi/chains';


export const config = getDefaultConfig({
    appName: 'Omnis',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, polygon, optimism, arbitrum, base, bsc,],
    ssr: true, // If your dApp uses server side rendering (SSR)
});