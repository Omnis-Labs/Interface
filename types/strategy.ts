export interface StrategyInterface {
    name: string;
    strategy: string | null;
    apy: string;
    ntPoints: string;
    currentTVL: number;
    maxCapacity: number;
    network: string;
    status: "HOT" | "NEW" | null;
};