import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import ImageWrapper from './ImageWrapper'
export default function SmallNewsCard({ imgLink, imgWidth = "100%", mainLinkClass, text }) {

  return (
    <div>
      <Link href={"#"} className={cn('hover:[&_h3]:text-(--main-color)', mainLinkClass)}>
        <ImageWrapper src={imgLink} alt='' width={300} height={300} className='aspect-video image-skeleton' style={{ width: imgWidth }} />
        <div>
          <h3 className='font-medium mt-1.5 line-clamp-3 md:font-bold leading-[1.4]'>
            {text}
          </h3>
          <div className='*:text-[#8b8b8b] *:font-medium text-[14px] mt-1'>
            <span>Daniel Flick</span>
            <span className='mx-[4] scale-x-[1.1] inline-block'>|</span>
            <span>{Math.floor(Math.random() * 24) + 1} hours ago</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
