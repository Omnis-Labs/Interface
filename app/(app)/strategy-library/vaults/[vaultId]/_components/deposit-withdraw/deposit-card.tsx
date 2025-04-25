"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import { TooltipText } from "@/components/ui/tooltip-text"
import { X, ArrowRight } from "lucide-react"
import { formatCurrency, formatNumber } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { DepositRules } from "./rules"
import { useAsterAPI } from "../../_context/aster-api-context"

export const DepositCard = () => {
    const [amount, setAmount] = useState("");
    const { asterAPIkey, asterSecretAPIkey } = useAsterAPI();

    const currBalance = 7654;
    const apy = 12.6;

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (!asterAPIkey || !asterSecretAPIkey) {
            alert("Please fill in both API keys.");
            return;
        }
        console.log(amount)
        console.log(asterAPIkey);
        console.log(asterSecretAPIkey);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="relative border border-zinc-600/90 rounded-lg px-4 py-2">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="text-2xl font-semibold border-none outline-none appearance-textfield [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    {!amount ? <Icons.usdt className="absolute right-2 bottom-1/4 w-6 h-6" /> : <X onClick={() => setAmount("")} className="absolute right-2 bottom-1/4 w-6 h-6 p-1 cursor-pointer text-zinc-800 rounded-full border border-zinc-700" />}
                </div>

                <div className="flex items-center justify-between my-2">
                    <div className="flex gap-2 text-lg">
                        <p>Balance:</p>
                        <p>{formatCurrency(currBalance)}</p>
                    </div>
                    <Badge className="rounded-full px-2 py-1 text-sm bg-[#F4EBFF] text-[#6941C6]">MAX</Badge>
                </div>

                <div className="space-y-1 mt-6">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-muted-foreground">Your Current Balance</p>
                        <p className="">{formatCurrency(currBalance)}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-muted-foreground">New Total After Deposit</p>
                        <p className="">{formatCurrency(currBalance + Number(amount))}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-muted-foreground">Estimated Annual Returns</p>
                        <p className="text-[var(--vault-page-primary)]">{formatCurrency((currBalance + Number(amount)) * apy / 100)}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-2">
                        <TooltipText text="Your Vault Balance" />
                        <div className="flex flex-row items-center gap-2">
                            <p className="font-normal text-md tracking-tighter text-zinc-400">{formatNumber(0)}</p>
                            {amount &&
                                <div className="flex flex-row items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-green-400" />
                                    <p className="font-normal text-lg tracking-tighter">{formatNumber(Number(amount), 2)}</p>
                                </div>
                            }
                            <Icons.usdt className="w-4 h-4" />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={!amount}
                        className={`w-full border border-zinc-600/80 text-md py-5 my-6 ${amount
                            ? "bg-[#363F72] hover:bg-blue-500 cursor-pointer"
                            : "bg-zinc-600 hover:bg-zinc-800"
                            }`}
                    >
                        Add Funds
                    </Button>

                    <DepositRules />
                </div>
            </form>
        </>
    )
}