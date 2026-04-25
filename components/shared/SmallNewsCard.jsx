import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SmallNewsCard({ imgWidth = "100%" }) {

  return (
    <div>
      <Link href={"#"} className='hover:[&_h3]:text-(--main-color)'>
        <Image src="/images/small-card-img.webp" alt='' width={300} height={300} className='aspect-video' style={{ width: imgWidth }} />
        <h3 className='font-medium mt-1.5 line-clamp-3 md:font-bold'>
          Final NFL Mock Draft: Cardinals Solidify Their Future
        </h3>
        <div className='*:text-[#8b8b8b] *:font-medium text-[14px] mt-0.5'>
          <span>Daniel Flick</span>
          <span className='mx-[4] scale-x-[1.1] inline-block'>|</span>
          <span>11 hours ago</span>
        </div>
      </Link>
    </div>
  )
}
