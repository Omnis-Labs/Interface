"use client"

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLogin, usePrivy } from "@privy-io/react-auth";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { Skeleton } from "./skeleton";

export const ConnectWalletButton = () => {
    const { authenticated, ready } = usePrivy();
    const router = useRouter()

    const walletIcons = [
        {
            src: "./wallets/Phantom_SVG_Icon.svg",
            alt: "Phantom",
        },
        {
            src: "./wallets/metamask-icon.svg",
            alt: "MetaMask",
        },
        {
            src: "./wallets/WalletConnect-icon.svg",
            alt: "WalletConnect",
        },
    ];

    const { login } = useLogin({
        onComplete: (params) => {
            if (!params.wasAlreadyAuthenticated) {
                router.replace('/ai-portfolio-manager');
            }
        },
        onError: (error) => {
            console.log("Login error:", error);
        }
    });

    useEffect(() => {
        if (authenticated) {
            router.replace('/ai-portfolio-manager');
        }
    }, [authenticated, router]);

    if (!ready || authenticated) return (
        <Skeleton className="w-24 h-10" />
    );

    return (
        <Button
            onClick={() => login()}
            disabled={authenticated}
            className={cn(
                "px-6 py-6 text-xl rounded-3xl cursor-pointer text-center relative overflow-hidden bg-gradient-to-r from-[#000A3F] via-[#000A3F] to-[#6FB1FC] flex justify-center group/modal-btn",
            )}
        >
            <>
                <span className="group-hover/modal-btn:translate-x-50 text-center transition duration-500">
                    Connect Wallet
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    {walletIcons.map((icon) => (
                        <Image
                            key={icon.src}
                            height={110}
                            width={110}
                            src={icon.src}
                            alt={icon.alt}
                            className="object-cover !m-0 !p-0 object-top rounded-full h-6 w-6 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                        />
                    ))}
                </div>
            </>
        </Button>
    );
}