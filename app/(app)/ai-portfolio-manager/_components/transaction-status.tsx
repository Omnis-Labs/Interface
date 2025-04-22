import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SquareArrowOutUpRight } from "lucide-react"

export function TrasnactionStatus() {
    const transaction = {
        hash: "0x713c83a320d87f32bece0eff68319e98dae58c2dc42adecbe20f4b6632eef03e",
        status: "Confirmed",
        Gas: 0.002,
        "strategies-activated": 3 / 3
    }

    const slicedTxn = transaction["hash"] ? transaction["hash"].slice(0, 4) + "..." + transaction["hash"].slice(-4) : "Loading...";

    return (
        <div className="relative rounded-2xl w-lg bg-[url('/green-bg.jpeg')]">
            {/* Background layer */}
            <div className="absolute rounded-2xl inset-0 bg-[#00381F66] bg-cover bg-center" />

            <CardHeader className="z-10">
                <CardTitle>Transaction Complete</CardTitle>
            </CardHeader>
            <CardContent className="z-10 bg-white">
                <div className="">
                    <div className="flex justify-between items-center">
                        <p>Transaction Hash</p>
                        <div className="flex gap-2 items-center">
                            <SquareArrowOutUpRight size={16} />
                            <p></p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </div>
    )
}
