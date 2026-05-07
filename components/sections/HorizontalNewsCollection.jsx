import Image from 'next/image';
import React from 'react'
import SmallNewsCard from '../shared/SmallNewsCard';

export default function HorizontalNewsCollection({ data }) {
  return (
    <section className="md:md-container">
      <div className="container">
        <div className="relative flex gap-4 pb-4 overflow-x-auto scrollbar-hide--HorizontalNewsCollection scrollbar-show-on-hover-md--HorizontalNewsCollection">
          {data?.news.map((item, index) => (
            <SmallNewsCard key={index} imgLink={item.image} text={item.title} imgWidth='220px' mainLinkClass="[&_img]:max-w-[unset]" />
          ))}

          {/* Scroll Sign */}
          <div className='absolute top-1 left-1'>
            <Image src={"/images/scroll-hand.png"} alt='' title='Scroll Horizontally' width={200} height={200} className='w-[40px] h-[40px] animate-swipe-left-hint rounded-[4px] overflow-hidden' />
          </div>
        </div>
      </div>
    </section>
  )
}
