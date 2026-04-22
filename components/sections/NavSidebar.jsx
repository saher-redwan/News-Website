"use client";

import React from 'react'
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/ui/drawer";
import Image from 'next/image';
import Link from 'next/link';

// export const title = "Left Drawer Navigation Menu";

export default function NavSidebar({ links }) {
    return (
        <div>
            <Drawer direction="left">
                <DrawerTrigger asChild>
                    <Image
                        src="/images/menu.png"
                        alt="menu"
                        width={65}
                        height={65}
                        loading='eager'
                        className='w-[26] invert-100 -scale-x-100 cursor-pointer'
                    />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerTitle className="hidden">Menu</DrawerTitle>
                    <div className="p-4">
                        <h2 className="mb-4 text-lg font-semibold">The most truthful news</h2>
                        <nav className="space-y-1 *:block *:mb-1 *:p-2 text-(--main-color) font-bold">
                            {links.map(link =>
                                <Link key={link} href="#" className="w-full hover:pl-4 duration-150">
                                    {link}
                                </Link>
                            )}
                        </nav>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
