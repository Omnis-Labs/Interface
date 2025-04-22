"use client"

import { ChartArea } from "lucide-react"
import * as React from "react"

export function RecommendedPortfolio() {

    return (
        <div className="rounded-2xl w-xl bg-[url('/navy-bg.jpeg')] bg-bottom-right">
            <div className="px-6 py-3">
                <div className="text-accent text-md font-medium">Recommended Portfolio</div>
            </div>
            <div className="py-3 px-6 bg-white rounded-b-xl">
                <div className="space-y-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[#039855]">
                            <ChartArea size={20} />
                            <p className="text-md font-semibold">Expected APR: 16.5%</p>
                        </div>
                        <p className="text-[#717BBC] text-sm">Based on your medium risk profile and $5,000 investment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
