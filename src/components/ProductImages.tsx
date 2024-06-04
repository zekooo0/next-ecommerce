"use client";

import React, { useState } from "react";

import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1557865353-72c46b1f864f?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
];
const ProductsImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="relative h-[500px]">
        <Image
          src={images[index].url}
          fill
          sizes="50vw"
          alt="product image"
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            key={img.id}
            className="relative gap-4 mt-8 w-1/4 h-32 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              fill
              sizes="30vw"
              alt="product image"
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsImages;
