import Image from 'next/image';
import React from 'react'
import SmallNewsCard from '../shared/SmallNewsCard';

const news = [
  {
    title: "SI:CYMI | Your 2026 NFL Draft Wrap-Up",
    author: "Brigid Kennedy",
    time: "45 minutes ago",
    image: "/images/big-card-img.webp",
  },
  {
    title: "Mike Tomlin Makes First Comments on Steelers Exit, Weighs in on Aaron...",
    author: "Brigid Kennedy",
    time: "9 hours ago",
    image: "/images/big-card-img.webp",
  },
  {
    title: "Deion Sanders Sends Message to Diego Pavia As Heisman Finalist Remains...",
    author: "Madison Williams",
    time: "12 hours ago",
    image: "/images/big-card-img.webp",
  },
  {
    title: "How Ty Simpson Plans to Bring a Nick Saban Mindset to Rams",
    author: "Madison Williams",
    time: "17 hours ago",
    image: "/images/big-card-img.webp",
  },
  {
    title: "What New Steelers Said About Previous Meeting",
    author: "Madison Williams",
    time: "1 day ago",
    image: "/images/big-card-img.webp",
  },
  {
    title: "What New Steelers Said About Previous Meeting",
    author: "Madison Williams",
    time: "1 day ago",
    image: "/images/big-card-img.webp",
  },
  {
    title: "What New Steelers Said About Previous Meeting",
    author: "Madison Williams",
    time: "1 day ago",
    image: "/images/big-card-img.webp",
  },
];


export default function HorizontalNewsCollection() {
  return (
    <section className="md:md-container">
      <div className="container">
        <div className="relative flex gap-4 pb-4 overflow-x-auto scrollbar-hide scrollbar-show-on-hover-md">
          {news.map((item, index) => (
            <SmallNewsCard key={index} imgLink={"/images/small-card-img.webp"} imgWidth='220px' mainLinkClass="[&_img]:max-w-[unset]" />
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
