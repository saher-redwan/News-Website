"use client";

import React from 'react'
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/ui/drawer";
import Image from 'next/image';
import Link from 'next/link';

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
                <DrawerContent className="border-r-0! border-t-6 border-b-6 border-(--main-color) border-solid" style={{ background: "linear-gradient(to left, var(--main-color) -5%, #fff 30%, var(--main-color) 1100%" }}>
                    <DrawerTitle className="hidden">Menu</DrawerTitle>
                    <div className="p-4">
                        <h2 className="mb-4 text-lg font-semibold capitalize">The most truthful news</h2>
                        <nav className="space-y-1 *:block *:mb-1 *:p-2 text-(--main-color) font-bold">
                            {links.map(link =>
                                <Link key={link} href="#" className="w-full hover:pl-4 duration-150 uppercase">
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
