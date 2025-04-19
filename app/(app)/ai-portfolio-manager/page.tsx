"use client"

import { RotateCcw, Sparkles } from "lucide-react"

export default function AiPortfolioManager() {
    return (
        <div className="relative font-[family-name:var(--font-geist-sans)] text-foreground">
            <div className="pt-4 px-4 mx-auto max-w-4xl h-screen space-y-8">
                <div className="bg-white rounded-4xl w-full h-full overflow-y-auto">
                    <div className="py-4 px-4 flex justify-between items-center border-b">
                        <div className="flex gap-4 items-center">
                            <Sparkles size={30} fill="#6A82FB" stroke="#6A82FB" />
                            <div className="-space-y-1">
                                <p className="text-lg text-[#293056 font-medium]">AI Portfolio Manager</p>
                                <p className="text-sm text-muted-foreground">Powered by Omnis Labs</p>
                            </div>
                        </div>

                        <div>
                            <RotateCcw size={20} stroke="#334155" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}