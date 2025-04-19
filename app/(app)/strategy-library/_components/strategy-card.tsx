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
import { StrategyInterface } from "@/types/strategy"
import { Status } from "./status-variant"
import { TvlBar } from "./tvl-bar"
import { Icons } from "@/lib/icons"

interface StrategyCardProps {
  strategy: StrategyInterface
}

export const StrategyCard = ({ strategy }: StrategyCardProps) => {

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div className="">
            <p className="text-sm font-medium text-muted-foreground">Strategy</p>
            <p className="text-xl font-semibold">{strategy.name}</p>
            <p className={`text-sm ${strategy.strategy ? "text-[#293056]" : "text-white"} font-normal`}>({strategy.strategy})</p>
          </div>
          <div>
            <Status className="text-sm" variant={strategy.status}>{strategy.status}</Status>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium">APY</p>
          <p className="text-2xl font-bold">{strategy.apy}</p>
          <p className="text-sm text-[#EC4A0A]">{strategy.ntPoints}x</p>
        </div>

        <div className="flex flex-col items-center gap-0.5">
          <div className="flex w-full text-[#363F72] justify-between items-center">
            <p className="text-sm font-medium">Current TVL</p>
            <p className="text-sm font-medium">Max Capacity</p>
          </div>

          <TvlBar currTvl={strategy.currentTVL} maxCap={strategy.maxCapacity} />

          <div className="flex w-full justify-between items-center">
            <p className="text-lg font-semibold">${strategy.currentTVL}</p>
            <p className="text-[#3E4784]">{strategy.maxCapacity}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm text-[#363F72]">Network</p>
          <div className="flex gap-1 items-center">
            <Icons.binance className="w-5 h-5" />
            <p className="text-sm">{strategy.network}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="rounded-full cursor-pointer bg-[#363F72] w-full hover:bg-[#363F72]/95">Start Earning</Button>
      </CardFooter>
    </Card>
  )
}
