import { logos } from "@/lib/icons"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="sticky top-1 z-50 max-w-[90rem] pr-2 mx-auto w-full">
            <div className="flex justify-between h-14 items-center font-medium">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <logos.omnisFullBlack width={130} height={130} />
                    </Link>
                    <p>Vaults</p>
                </div>
                <div className="flex gap-4">
                    <Link href={"/"}>Docs</Link>
                    <Link href={"/"}>Github</Link>
                    <Link href={"/"}>Support</Link>
                </div>
            </div>
        </header>
    )
}