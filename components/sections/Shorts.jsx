import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import VideoIcon from '../svgs/VideoIcon';


export default function Shorts() {
    const shorts = [
        {
            title: 'UFC Media "First Person" Trend',
            image: "/images/small-card-img.webp",
        },
        {
            title: "Booker T Questions if OBA FEMI is Ready fo...",
            image: "/images/small-card-img.webp",
        },
        {
            title: "The Funkmaster FIRED UP After Making Weight",
            image: "/images/small-card-img.webp",
        },
        {
            title: "RAMS are Ideal Landing Sport for TY SIMPSON...",
            image: "/images/small-card-img.webp",
        },
        {
            title: "Don't sleep on Tyson this...",
            image: "/images/small-card-img.webp",
        },
    ];


    return (
        <div className="md:md-container shorts-section">
            <Carousel className="w-full container [&_img]:select-none" opts={{ align: "start" }} >
                <CarouselContent>
                    {[...Array(8)].map((_, index) => (
                        <CarouselItem key={index} className="aspect-[6.8/12] basis-[calc(194px+16px)] md:basis-[calc(230px+16px)]">
                            <article className="relative overflow-hidden h-full rounded-[18px] bg-neutral-900 hover:scale-[0.99] duration-[0.25s]">
                                <Image
                                    src={shorts[0].image}
                                    alt={shorts[0].title}
                                    className="h-full w-full object-cover"
                                    width={500}
                                    height={500}
                                />

                                {/* dark gradient */}
                                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/70" />

                                {/* VideoIcon */}
                                <div className="absolute top-3.5 right-2.5 invert-[1] *:scale-[1.06]">
                                    <VideoIcon />
                                </div>

                                {/* SI Logo */}
                                <div className="absolute left-2 top-1 opacity-[0.7]">
                                    <Image src="/images/logo.avif" alt="" width={200} height={200} className="w-[45] h-[45]" />
                                </div>

                                {/* title */}
                                <h3 className="absolute bottom-4 left-4 right-4 line-clamp-2 text-[18px] font-bold leading-[1.25] text-white">
                                    {shorts[0].title}
                                </h3>

                                {/* To make scrolling smoother  */}
                                <div className='absolute top-0 w-full h-full z-1 cursor-pointer' />

                            </article>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
