"use client"

import { useState } from "react"
import { useLogout, usePrivy } from "@privy-io/react-auth"
import { ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { WalletIcons } from "@/lib/icons"

export const WalletStatus = () => {
    const { user, authenticated, ready } = usePrivy();
    const { logout } = useLogout({
        onSuccess: () => {
            console.log("user logged out");
        }
    })

    const walletAddress = authenticated && ready && user?.wallet?.address ? user.wallet.address : null;
    const slicedWalletAd = walletAddress ? walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4) : "Loading...";

    return (
        <Button
            onClick={logout}
            className={cn(
                "px-6 py-6 text-xl rounded-3xl cursor-pointer text-center relative overflow-hidden bg-gradient-to-r from-[#000A3F] via-[#000A3F] to-[#6FB1FC] flex justify-center group/modal-btn",
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