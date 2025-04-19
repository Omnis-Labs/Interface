"use client"

import Image from "next/image";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

import { WalletStatus } from "@/components/ui/wallet-status";
import { ConnectWalletButton } from "@/components/ui/connect-wallet"

export default function Signin() {
    const { authenticated } = usePrivy();

    useEffect(() => {
        if (authenticated) redirect("/ai-portfolio-manager")
    }, [authenticated])

    return (
        <div className="relative font-[family-name:var(--font-geist-sans)] text-foreground">
            <div className="px-4 mx-auto max-w-5xl text-center space-y-20">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <Image src={"/landing-asset.png"} alt={"blob"} width={400} height={300} className="-mt-8" />

                    <div className="-mt-16 text-3xl font-medium tracking-tight leading-none">
                        Please connect Wallet to continue
                    </div>

                    {!authenticated ?
                        <ConnectWalletButton /> : <WalletStatus />
                    }
                </div>
            </div>
        </div>
    );
}
