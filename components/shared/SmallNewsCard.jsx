import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
export default function SmallNewsCard({ imgLink, imgWidth = "100%", mainLinkClass }) {

  return (
    <div>
      <Link href={"#"} className={cn('hover:[&_h3]:text-(--main-color)', mainLinkClass)}>
        <Image src={imgLink} alt='' width={300} height={300} className='aspect-video' style={{ width: imgWidth }} />
        <div>
          <h3 className='font-medium mt-1.5 line-clamp-3 md:font-bold leading-[1.4]'>
            Final NFL Mock Draft: Cardinals Solidify Their Futures
          </h3>
          <div className='*:text-[#8b8b8b] *:font-medium text-[14px] mt-0.5'>
            <span>Daniel Flick</span>
            <span className='mx-[4] scale-x-[1.1] inline-block'>|</span>
            <span>11 hours ago</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
