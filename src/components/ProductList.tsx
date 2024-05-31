import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="justify-between gap-x-8 gap-y-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-12">
      <Link href={"/test"} className="flex flex-col gap-4 w-full">
        <div className="relative w-full h-80">
          <Image
            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            sizes="25vw"
            alt="product image"
            className="z-10 absolute hover:opacity-0 rounded-md transition-all duration-500 ease-in-out object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            sizes="25vw"
            alt="product image"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span>Product Name</span>
          <span>49$</span>
        </div>
        <div className="text-gray-500">My description</div>
        <button className="hover:bg-main px-3 py-2 rounded-3xl w-max text-main hover:text-white ring ring-main">
          Add to Cart
        </button>
      </Link>
      <Link href={"/test"} className="flex flex-col gap-4 w-full">
        <div className="relative w-full h-80">
          <Image
            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            sizes="25vw"
            alt="product image"
            className="z-10 absolute hover:opacity-0 rounded-md transition-all duration-500 ease-in-out object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            sizes="25vw"
            alt="product image"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span>Product Name</span>
          <span>49$</span>
        </div>
        <div className="text-gray-500">My description</div>
        <button className="hover:bg-main px-3 py-2 rounded-3xl w-max text-main hover:text-white ring ring-main">
          Add to Cart
        </button>
      </Link>
      <Link href={"/test"} className="flex flex-col gap-4 w-full">
        <div className="relative w-full h-80">
          <Image
            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            sizes="25vw"
            alt="product image"
            className="z-10 absolute hover:opacity-0 rounded-md transition-all duration-500 ease-in-out object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            sizes="25vw"
            alt="product image"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span>Product Name</span>
          <span>49$</span>
        </div>
        <div className="text-gray-500">My description</div>
        <button className="hover:bg-main px-3 py-2 rounded-3xl w-max text-main hover:text-white ring ring-main">
          Add to Cart
        </button>
      </Link>
      <Link href={"/test"} className="flex flex-col gap-4 w-full">
        <div className="relative w-full h-80">
          <Image
            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            sizes="25vw"
            alt="product image"
            className="z-10 absolute hover:opacity-0 rounded-md transition-all duration-500 ease-in-out object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            sizes="25vw"
            alt="product image"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span>Product Name</span>
          <span>49$</span>
        </div>
        <div className="text-gray-500">My description</div>
        <button className="hover:bg-main px-3 py-2 rounded-3xl w-max text-main hover:text-white ring ring-main">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
