import React from 'react'
import BigNewsCard from './BigNewsCard'
import SmallNewsCard from './SmallNewsCard'

export default function NewsShow({ smallImgLink, bigImgLink }) {
    return (
        <div>
            <div className='md:flex md:md-container md:gap-5'>
                <BigNewsCard imgLink={bigImgLink} className='text-left md:w-[56%]' />
                <div className='container flex flex-col [&_img]:w-[160px]! mt-6 gap-4 md:flex-1 md:mt-0'>
                    {[...Array(4)].map((_, i) => (
                        <SmallNewsCard key={i} imgLink={smallImgLink} mainLinkClass={"flex gap-4 items-start [&_h3]:-mt-1 md:[&_img]:w-[186px]!"} />
                    ))}
                </div>
            </div>
        </div>
    )
}
