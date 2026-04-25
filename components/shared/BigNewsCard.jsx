import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BigNewsCard({ imgWidth = "100%", className = "text-center" }) {

  return (
    <div className={className}>
      <Link href={"#"} className='hover:[&_h3]:text-(--main-color)' >
        <Image src="/images/small-card-img.webp" alt='' width={300} height={300} className='aspect-video' style={{ width: imgWidth }} />
        <div className='container'>
          <h3 className='font-bold mt-1.5 line-clamp-3 text-[1.625rem] leading-[1.3em]'>
            Best- and Worst-Case Scenarios for Every Team in the NFL Draft
          </h3>
          <div className='mt-1.5'>
            <span className='font-medium line-clamp-3'>
              Some general managers will have things break their way, while others will be left scrambling as the board takes shape on Thursday and beyond.
            </span>
          </div>
          <div className='*:text-[#8b8b8b] *:font-medium text-[14px] mt-1.5'>
            <span>Daniel Flick</span>
            <span className='mx-[4] scale-x-[1.1] inline-block'>|</span>
            <span>11 hours ago</span>
          </div>
        </div>
      </Link >
    </div >
  )
}
