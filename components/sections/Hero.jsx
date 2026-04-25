import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import BigNewsCard from '../shared/BigNewsCard';
import SmallNewsCard from '../shared/SmallNewsCard';

export default function Hero() {
  // 186
  // 253

  // className = "text-center"

  return (
    <div >


      <div className='flex flex-col gap-y-5 gap-x-4 md:flex-row md:md-container items-start '>
        {/* "100%" */}
        <div className='md:w-1/2 md:order-2'>
          <BigNewsCard />
        </div>

        {/* 160 */}
        <div className='container flex gap-4 *:flex-1 md:flex-1 md:order-1 md:flex-col'>
          <SmallNewsCard />
          <SmallNewsCard />
        </div>

        <div className='container flex-1 md:order-3'>
          <h2 className='uppercase text-[18px] font-bold'>top headlines</h2>
          <hr className='mt-2! mb-4! md:mb-[10]!' />

          {[...Array(9)].map((_, i) => (
            <Link key={i} href='#' className='border-b-[#e0e0e0] not-last:border-b block hover:text-(--main-color) transition-none pb-2 pt-0.5 md:pb-3 md:pt-1'>
              <h3 className='font-medium text-[14px] line-clamp-3 '>Five Most Notable Quarterbacks Still Available on Day 3 of the Draft</h3>
            </Link>
          ))}

        </div>
      </div>
    </div >
  )
}
