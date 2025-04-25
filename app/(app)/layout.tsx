"use client"

import { useWalletAuth } from "@/hooks/useWalletAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { StrategyLibrarySkeleton } from "./strategy-library/_components/skeleton";
// import { ChatProvider } from "./ai-portfolio-manager/_contexts/chat";

const Layout = ({ children }: { children: ReactNode }) => {
    const { isLoading, shouldRedirect } = useWalletAuth()
    const router = useRouter();

    useEffect(() => {
        if (shouldRedirect) {
            router.replace("/sign-in")
        }
    }, [shouldRedirect])

    if (isLoading) {
        return <StrategyLibrarySkeleton />
    }

    return (
        <div className="relative flex flex-col space-y-4 py-2">
            <div className="!mb-6 space-y-4">
                {/* <ChatProvider> */}
                {children}
                {/* </ChatProvider> */}
            </div>
        </div>
    );
};

export default Layout;