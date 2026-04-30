import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-[#212121] text-white py-10 font-sans mt-30">
            <div className="mx-auto px-6">

                <div className="flex items-center mb-8">
                    <div className="grow border-t border-[#af231c]"></div>
                    <div className="px-1 text-3xl font-black tracking-tighter">
                        <Image src={"/images/logo.avif"} alt='' width={250} height={250} className='w-[7.5rem]' />
                    </div>
                    <div className="grow border-t border-[#af231c]"></div>
                </div>

                <div className="grid grid-cols-auto-2 md:grid-cols-auto-5 items-center gap-y-3 gap-x-12 mb-8 text-[15px] font-medium md:max-w-[55rem] mx-auto md:gap-x-7 md:items-start *:w-fit">
                    <span>
                        <Link href="#" className="hover:underline">Privacy Policy</Link></span>
                    <span>
                        <Link href="#" className="hover:underline">Cookie Policy</Link></span>
                    <span>
                        <Link href="#" className="hover:underline">Takedown Policy</Link></span>
                    <span>
                        <Link href="#" className="hover:underline">Terms and Conditions</Link></span>
                    <span>
                        <Link href="#" className="hover:underline">SI Accessibility Statement</Link></span>
                    <span>
                        <Link href="#" className="hover:underline">Sitemap</Link></span>
                    <span>
                        <Link href="#" className="hover:underline">A-Z Index</Link></span>
                    <span>
                        <Link href="#" className="hover:underline">FAQ</Link></span>
                    <span>
                        <Link href="#" className="hover:underline">Cookies Settings</Link></span>
                </div>

                <div className="border-t border-[#cc0000] mb-6"></div>

                <div className="text-center text-[14px] font-medium leading-relaxed px-2 md:px-10">
                    <p>
                        © 2026 ABG-SI LLC - SPORTS ILLUSTRATED IS A REGISTERED TRADEMARK OF ABG-SI LLC. - All Rights Reserved. The content on this site is for entertainment and educational purposes only. Betting and gambling content is intended for individuals 21+ and is based on individual commentators' opinions and not that of Sports Illustrated or its affiliates, licensees and related brands. All picks and predictions are suggestions only and not a guarantee of success or profit. If you or someone you know has a gambling problem, crisis counseling and referral services can be accessed by calling 1-800-GAMBLER.
                    </p>
                </div>

            </div>
        </footer>
    )
}
