
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
    return (
        <header className='h-16 max-w-2xl mx-auto px-8 bg-cyan-400 flex items-center justify-between '>
            {/* logo */}
            {/* <Menu size="24px" className="hidden md:block" /> show menu on md screen */}
            <div>Logo</div>

            {/* nave buttons */}
            <ul className='hidden md:block'>
                <li className='felx space-x-5'>
                    <Link href={"/"}>Home</Link>

                    <Link href={"/about"}>About</Link>

                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
            {/* add sheet component from shadcn */}
            <Sheet>
                <SheetTrigger className='md:hidden'><Menu /></SheetTrigger>
                <SheetContent>
                    <ul>
                        <li className=' space-x-5'>

                            <Link href={"/"}>Home</Link>

                            <Link href={"/about"}>About</Link>

                            <Link href={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default Header;