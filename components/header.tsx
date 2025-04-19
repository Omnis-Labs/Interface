import { logos } from "@/lib/icons"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="sticky top-0 bg-white/50 z-50">
            <div className="max-w-[90rem] pr-2 mx-auto w-full">
                <div className="flex justify-between h-14 items-center font-medium">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <logos.omnisFullBlack width={130} height={130} />
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <Link href={"/"}>Docs</Link>
                        <Link href={"/"}>Github</Link>
                        <Link href={"/"}>Support</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}