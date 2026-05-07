import React from 'react'
import BigNewsCard from './BigNewsCard'
import SmallNewsCard from './SmallNewsCard'

export default function NewsShow({ data }) {
    return (
        <div>
            <div className='md:flex md:md-container md:gap-5'>
                <BigNewsCard imgLink={data?.mainNews.image} text={data?.mainNews.title} className='text-left md:w-[56%]' />
                <div className='container flex flex-col mt-6 gap-4 md:flex-1 md:mt-0'>
                    {data?.news.map((item, i) => (
                        <SmallNewsCard key={i} imgLink={item.image} text={item.title} mainLinkClass={"flex gap-4 items-start [&_h3]:-mt-[3px] [&_img]:w-[160px]! [&_img]:min-w-[160px]! md:[&_img]:w-[186px]! md:[&_img]:min-w-[186px]!"} />
                    ))}
                </div>
            </div>
        </div>
    )
}
