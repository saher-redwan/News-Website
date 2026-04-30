import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
export default function SectionTitle({ title, linkText, link, className }) {
    return (
        <div className='container'>
            <div className={cn("md:md-container mt-2.5 mb-4", className)}>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[18px] font-bold uppercase'>{title}</h2>
                    {link &&
                        <Link href="#" className='uppercase text-[14px] text-[#006fd2] font-medium hover:underline'>
                            {linkText}
                        </Link>
                    }
                </div>

                <hr />
            </div>
        </div>
    )
}
