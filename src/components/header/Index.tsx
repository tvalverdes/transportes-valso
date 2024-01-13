'use client'
import Image from "next/image"
import { HeaderInfo } from "./info/Index"
import { useState } from "react"
import { HamburguerMenu } from "../hamburguer-menu/Index"
import { Items } from "./items/Index"

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const menuHandler = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <HeaderInfo />
            <div className="container mx-auto flex justify-between items-center py-4">
                <Image quality={100} priority width={130} height={80} src="/logo.webp" alt="logo" aria-hidden="true" />
                <ul className="hidden md:flex gap-4 items-center">
                    <Items />
                </ul>
                <ul className={`${showMenu ? 'absolute' : 'hidden'} flex gap-4 items-center`}>
                    <Items />
                </ul>
                <div className="flex md:hidden absolute">
                    <button onClick={menuHandler}>
                        <HamburguerMenu />
                    </button>
                </div>
            </div>
        </header>
    )
}