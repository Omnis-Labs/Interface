// // hooks/useUsdtBalance.ts
// import { useEffect, useState } from "react";
// import { useContractRead } from "wagmi";
// import { ethers } from "ethers";

// const USDT_CONTRACT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955"; // USDT on BNB Chain
// const USDT_ABI = [
//     "function balanceOf(address owner) view returns (uint256)",
// ];

// export const useUsdtBalance = (walletAddress?: string) => {
//     const [formattedBalance, setFormattedBalance] = useState<string>("0");

//     const {
//         data,
//         isLoading,
//         isError,
//         refetch,
//     } = useContractRead({
//         address: USDT_CONTRACT_ADDRESS,
//         abi: USDT_ABI,
//         functionName: "balanceOf",
//         args: [walletAddress],
//         enabled: !!walletAddress,
//         watch: true, // automatically updates on block change
//     });

//     useEffect(() => {
//         if (data) {
//             setFormattedBalance(ethers.utils.formatUnits(data, 18)); // USDT uses 18 decimals
//         }
//     }, [data]);

//     return {
//         balance: formattedBalance,
//         isLoading,
//         isError,
//         refetch,
//     };
// };
