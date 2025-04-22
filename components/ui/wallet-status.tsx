"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLogout, usePrivy } from "@privy-io/react-auth"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { WalletIcons } from "@/lib/icons"

export const WalletStatus = () => {
    const router = useRouter();

    const { user, authenticated, ready } = usePrivy();
    const { logout } = useLogout({
        onSuccess: () => {
            router.replace("/sign-in");
        }
    })

    useEffect(() => {
        if (!authenticated) {
            router.replace('/sign-in');
        }
    }, [authenticated, router]);

    const walletAddress = ready && authenticated && user?.wallet?.address ? user.wallet.address : null;
    const slicedWalletAd = walletAddress ? walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4) : "Loading...";

    return (
        <Button
            onClick={logout}
            className={cn(
                "px-4 py-4 text-xl rounded-xl cursor-pointer text-center relative overflow-hidden bg-gradient-to-r from-[#000A3F] via-[#000A3F] to-[#6FB1FC] flex justify-center group/modal-btn",
            )}
        >
            <div className="flex items-center justify-center gap-2">
                <WalletIcons.phantom className="w-6 h-6 rounded-md" />
                <div className="text-center text-sm">
                    {slicedWalletAd}
                </div>
            </div>
        </Button>
    )
}