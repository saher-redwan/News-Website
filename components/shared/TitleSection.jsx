import Link from 'next/link'
import React from 'react'

export default function TitleSection({ title, linkText, link }) {
    return (
        <div>
            <div className='container flex justify-between items-center'>
                <h2 className='text-[18px] font-bold'>{title}</h2>
                {link &&
                    <Link href="#" className='text-[14px] text-[#006fd2] font-medium hover:underline'>
                        {linkText}
                    </Link>
                }
            </div>
            <hr />
        </div>
    )
}
