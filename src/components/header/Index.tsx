'use client'
import { isMenuShowingState } from '@/store/useStore'
import Image from "next/image"
import Link from "next/link"
import { HamburguerButton } from "../hamburguer-button/Index"
import { HeaderInfo } from "./info/Index"
import { Items } from "./items/Index"

export const Header = () => {
    const { isMenuShowing } = isMenuShowingState()

    return (
        <header className="shadow shadow-slate-50">
            <HeaderInfo />
            <div className="container mx-auto flex justify-between items-center py-4 relative">
                <Link href='/'>
                    <Image quality={100} priority width={130} height={80} src="/logo.webp" alt="logo" aria-hidden="true" />
                </Link>
                <ul className="hidden md:flex gap-4 items-center">
                    <Items />
                </ul>
                <ul className={`${isMenuShowing ? 'flex' : 'hidden'} fixed flex-col gap-8 items-center justify-center z-40 top-0 bg-white w-full px-1 h-full`}>
                    <Items />
                </ul>
                <div className="flex md:hidden absolute z-50 right-0">
                    <HamburguerButton />
                </div>
            </div>
        </header>
    )
}