"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    image:
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    image:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current < slides.length - 1 ? current + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="flex w-max h-full transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row `}
          >
            <div className="flex flex-col justify-center items-center gap-8 2xl:gap-12 xl:w-1/2 h-1/2 xl:h-full text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="font-semibold text-5xl lg:text-6xl 2xl:text-8xl">
                {slide.title}
              </h1>
              <Link
                href={slide.url}
                className="bg-black px-4 py-3 rounded-md text-white p"
              >
                SHOP NOW
              </Link>
            </div>
            <div className="relative xl:w-1/2 h-1/2 xl:h-full">
              <Image
                src={slide.image}
                alt="product image"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-8 left-1/2 absolute flex gap-4 m-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="bg-gray-600 rounded-full w-[6px] h-[6px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
