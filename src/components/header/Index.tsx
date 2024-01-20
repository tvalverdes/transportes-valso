'use client'
import Image from "next/image"
import { HeaderInfo } from "./info/Index"
import { useState } from "react"
import { HamburguerButton } from "../hamburguer-button/Index"
import { Items } from "./items/Index"
import Link from "next/link"

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const menuHandler = () => {
        setShowMenu(!showMenu)
    }

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
                {/*Modify scroll*/}
                <ul className={`${showMenu ? 'flex' : 'hidden'} fixed flex-col gap-8 items-center justify-center z-40 top-0 bg-white w-full px-1 h-full`}>
                    <Items />
                </ul>
                <div className="flex md:hidden absolute z-50 right-0">
                    <HamburguerButton method={menuHandler} />
                </div>
            </div>
        </header>
    )
}