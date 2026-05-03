"use client"

import React, { useEffect, useRef, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import VideoIcon from '../svgs/VideoIcon';
import { Heart, MessageCircle, Play, Share2, Volume2, VolumeX, X } from 'lucide-react';


const shorts = [
    {
        id: 1,
        title: 'UFC Media "First Person" Trend',
        thumbnail: "/shorts/thumb-1.jpeg",
        video: "/shorts/video-1.mp4",
    },
    {
        id: 2,
        title: "Booker T Questions if OBA FEMI is Ready fo...",
        thumbnail: "/shorts/thumb-2.jpeg",
        video: "/shorts/video-2.mp4",
    },
    {
        id: 3,
        title: "The Funkmaster FIRED UP After Making Weight",
        thumbnail: "/shorts/thumb-3.jpeg",
        video: "/shorts/video-3.mp4",
    },
    {
        id: 4,
        title: "RAMS are Ideal Landing Sport for TY SIMPSON...",
        thumbnail: "/shorts/thumb-4.jpeg",
        video: "/shorts/video-4.mp4",
    },
    {
        id: 5,
        title: "Don't sleep on Tyson this...",
        thumbnail: "/shorts/thumb-5.jpeg",
        video: "/shorts/video-5.mp4",
    },
    {
        id: 6,
        title: "Don't sleep on Tyson this...",
        thumbnail: "/shorts/thumb-6.jpeg",
        video: "/shorts/video-6.mp4",
    },
    {
        id: 7,
        title: "Don't sleep on Tyson this...",
        thumbnail: "/shorts/thumb-7.jpeg",
        video: "/shorts/video-7.mp4",
    },
];

export default function Shorts() {


    const [open, setOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const [muted, setMuted] = useState(true);
    const mutedRef = useRef(true);

    const [pausedVideos, setPausedVideos] = useState({});
    const pausedVideosRef = useRef({});

    const videoRefs = useRef([]);

    const visibleIndexRef = useRef(null);

    function openShort(index) {
        setStartIndex(index);
        setOpen(true);
    }

    function closeShort() {
        setOpen(false);
        videoRefs.current.forEach((video) => {
            if (video) video.pause();
        });
    }

    function toggleSound(e) {
        e.stopPropagation();

        const nextMuted = !mutedRef.current;

        mutedRef.current = nextMuted;
        setMuted(nextMuted);

        videoRefs.current.forEach((video) => {
            if (video) {
                video.muted = nextMuted;
            }
        });
    }

    function toggleVideo(index) {
        const video = videoRefs.current[index];
        if (!video) return;

        if (video.paused) {
            video.play().catch(() => { });

            pausedVideosRef.current[index] = false;

            setPausedVideos((prev) => ({
                ...prev,
                [index]: false,
            }));
        } else {
            video.pause();

            pausedVideosRef.current[index] = true;

            setPausedVideos((prev) => ({
                ...prev,
                [index]: true,
            }));
        }
    }

    useEffect(() => {
        if (!open) return;

        const timer = setTimeout(() => {
            const container = document.getElementById("shorts-viewer");
            const target = document.getElementById(`short-${startIndex}`);

            if (container && target) {
                container.scrollTo({
                    top: target.offsetTop,
                    behavior: "instant",
                });
            }
            console.log("from setTimeOut");

        }, 50);

        return () => clearTimeout(timer);
    }, [open, startIndex]);

    useEffect(() => {
        if (!open) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index);
                    const video = videoRefs.current[index];

                    if (!video) return;

                    if (entry.isIntersecting) {
                        visibleIndexRef.current = index;

                        if (!pausedVideosRef.current[index]) {
                            video.play().catch(() => { });
                        }
                    } else {
                        video.pause();
                        video.currentTime = 0;
                    }
                });
            },
            {
                threshold: 0.75,
            }
        );

        const items = document.querySelectorAll(".short-item");
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, [open]);




    return (
        <>
            <div className="md:md-container shorts-section">
                <Carousel className="w-full container [&_img]:select-none" opts={{ align: "start" }} >
                    <CarouselContent>
                        {shorts.map((item, index) => (
                            <CarouselItem key={item.id} className="aspect-[6.8/12] basis-[calc(194px+16px)] md:basis-[calc(230px+16px)]">
                                <article
                                    onClick={() => openShort(index)}
                                    className="relative overflow-hidden h-full rounded-[18px] bg-neutral-900 hover:scale-[0.99] duration-[0.25s]"
                                >
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
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
                                        {item.title}
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


            {/* Shorts Viewer */}
            {open && (
                <div className="fixed inset-0 z-9999 bg-black animate-[scale-in-opacity_0.2s_ease-out_forwards]">
                    <button
                        onClick={closeShort}
                        className="fixed right-4 top-4 z-50 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 md:right-[1.6rem]"
                    >
                        <X size={22} />
                    </button>

                    <div
                        id="shorts-viewer"
                        className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
                    >
                        {shorts.map((item, index) => (
                            <div
                                key={item.id}
                                id={`short-${index}`}
                                data-index={index}
                                className="short-item relative flex h-screen snap-start items-center justify-center"
                            >
                                <div
                                    onClick={() => toggleVideo(index)}
                                    className="relative h-full w-full max-w-[430px] overflow-hidden bg-black sm:h-[92vh] sm:rounded-[28px]"
                                    style={{
                                        cursor: videoRefs.current[index]?.paused
                                            ? "pointer" : "default"
                                    }}
                                >
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        src={item.video}
                                        className="h-full w-full object-cover cursor-default"
                                        loop
                                        muted={muted}
                                        playsInline
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                                    {pausedVideos[index] && (
                                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                            <div className="flex size-20 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md animate-[scale-out-opacity_0.35s_ease-out_forwards]">
                                                <Play size={38} fill="white" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Bottom Info */}
                                    <div className="absolute bottom-8 left-5 right-20 text-white">
                                        <h3 className="line-clamp-2 text-base font-bold">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Right Actions */}
                                    <div className="absolute bottom-24 right-4 flex flex-col items-center gap-5 text-white">
                                        <button
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex flex-col items-center gap-1">
                                            <span className="flex size-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                                                <Heart size={23} />
                                            </span>
                                            <span className="text-xs">12K</span>
                                        </button>

                                        <button
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex flex-col items-center gap-1">
                                            <span className="flex size-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                                                <MessageCircle size={23} />
                                            </span>
                                            <span className="text-xs">320</span>
                                        </button>

                                        <button
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex flex-col items-center gap-1">
                                            <span className="flex size-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                                                <Share2 size={23} />
                                            </span>
                                            <span className="text-xs">Share</span>
                                        </button>

                                        <button
                                            onClick={toggleSound} className="flex size-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md cursor-pointer hover:backdrop-blur-2xl hover:bg-[#ffffff29]">
                                            {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
