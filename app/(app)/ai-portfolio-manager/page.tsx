"use client"

import Image from "next/image"
import { RotateCcw } from "lucide-react"
import Chat from "./_components/chat"
import { FormValues, PortfolioForm } from "./_components/portfolio-form"
import { RecommendedPortfolio } from "./_components/recommended-portfolio"
import { useState } from "react"
import { PortfolioSummary } from "@/types/strategy"
import { usePortfolioSummary } from "./_hooks/use-portfolio-summary"

// export default function AiPortfolioManager() {
//     return (
//         <div className="relative font-[family-name:var(--font-geist-sans)] text-foreground">
//             <div className="pt-4 px-4 mx-auto max-w-4xl h-[90vh]">
//                 <div className="flex flex-col bg-white rounded-4xl w-full h-full overflow-y-auto">
//                     <div>
//                         <div className="py-4 px-4 flex justify-between items-center border-b">
//                             <div className="flex gap-4 items-center">
//                                 <Image src="/ui/sparkles.svg" alt="sparkles" width={30} height={30} />
//                                 <div className="-space-y-1">
//                                     <p className="text-lg text-[#293056 font-medium]">AI Portfolio Manager</p>
//                                     <p className="text-sm text-muted-foreground">Powered by Omnis Labs</p>
//                                 </div>
//                             </div>

//                             <div>
//                                 <RotateCcw size={20} stroke="#334155" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex-1 h-0 overflow-y-hidden w-full">
//                         <Chat />
//                         {/* <NotLoggedInAlert /> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function AiPortfolioManager() {
    const { portfolioSummary, setPortfolioSummary, onSubmit } = usePortfolioSummary();

    return (
        <div className="relative font-[family-name:var(--font-geist-sans)] text-foreground">
            <div className="pt-4 px-4 mx-auto max-w-4xl">
                <div className="flex items-center justify-center">
                    {portfolioSummary ? (
                        <RecommendedPortfolio portfolioSummary={portfolioSummary!} />
                    ) : (
                        <PortfolioForm onSubmit={onSubmit} />
                    )}
                </div>
            </div>
        </div>
    )
}