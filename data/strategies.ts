import { StrategyInterface } from "@/types/strategy";

export const dummyStrategies: StrategyInterface[] = [
    {
        name: "Volume Bot",
        strategy: "Earn Aster Rh Points",
        apy: "5.5%",
        ntPoints: "1x NT Points",
        currentTVL: 11317930.10,
        maxCapacity: 26000000,
        network: "Binance",
        status: "HOT"
    },
    {
        name: "Normal Grid",
        strategy: "Uses equal price steps",
        apy: "13.85%",
        ntPoints: "1.25x NT Points",
        currentTVL: 738342.05,
        maxCapacity: 1000000,
        network: "Binance",
        status: "HOT"
    },
    {
        name: "Log Grid",
        strategy: "Uses proportional price steps", // null: No sub-strategy shown
        apy: "17.33%",
        ntPoints: "2x NT Points",
        currentTVL: 395112.36,
        maxCapacity: 500000,
        network: "Binance",
        status: "NEW"
    }
];
