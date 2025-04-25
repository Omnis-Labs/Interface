import { Skeleton } from "@/components/ui/skeleton"

export function StrategyLibrarySkeleton() {
    return (
        <div className="pt-4 px-4 mx-auto max-w-7xl space-y-8">
            <Skeleton className="h-40 w-full" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Skeleton className="w-full h-[450px]" />
                <Skeleton className="w-full h-[450px]" />
                <Skeleton className="w-full h-[450px]" />
            </div>
        </div>
    )
}
