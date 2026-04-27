import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NavSidebar from './NavSidebar';

export default function Navbar() {
    
    const links = ["breaking", "politics", "sport", "coins", "Gas", "IT", "transport", "more"]

    return (
        <div className='bg-black pt-[14] pb-[6.5] sticky top-[-14px] z-10'>
            <nav className='bg-(--main-color) text-white h-[38] flex justify-between items-center'>

                {/* logo */}
                <Link href={"#"} className='relative w-[65] ml-4 flex-1'>
                    <Image
                        src="/images/logo.webp"
                        alt="news image"
                        width={65}
                        height={65}
                        loading='eager'
                        className='absolute top-1/2 left-0 -translate-y-1/2 object-cover scale-[1.25] h-auto w-[65]'
                    />
                </Link>

                {/* links */}
                <div className='hidden md:block'>
                    <ul className='text-[1.125rem] uppercase flex items-center gap-1.5 [&_a]:p-[9px] [&_a]:block'>
                        {links.map(link =>
                            <li key={link}>
                                <Link href={"#"}>
                                    {link}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                {/* mobile-menu */}
                <div className='md:hidden'>
                    <NavSidebar links={links} />
                </div>

                {/* search & lang */}
                <div className='mr-2.5 flex gap-1 items-center flex-1 justify-end'>
                    <Link href={"#"} className='block p-[8]'>
                        <Image src="/images/search.png" width={22} height={22} alt="..." className="w-[25] h-[25] invert-100" />
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="bg-transparent flex gap-1 items-center h-[40] shadow-[0]! border-0">
                                <Image src={"/images/world.png"} alt='' width={200} height={200} className='invert-100 w-[23] h-[23]' />
                                <Image src={"/images/down-arrow.png"} alt='' width={200} height={200} className='invert-100 w-[12] h-[12] -mb-0.5' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>Language</DropdownMenuLabel>
                                <DropdownMenuItem className="text-[1rem]">English</DropdownMenuItem>
                                <DropdownMenuItem className="text-[1rem]">French</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

            </nav>
        </div>
    )
}
