"use client";

import { Menu as Burger } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Burger className="cursor-pointer" onClick={() => setOpen((e) => !e)} />
      {open && (
        <div className="top-20 left-0 z-10 absolute flex flex-col justify-center items-center gap-8 bg-black w-full h-[calc(100vh-80px)] text-white text-xl">
          <Link href={""}>Homepage</Link>
          <Link href={""}>Shop</Link>
          <Link href={""}>Deals</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>Logout</Link>
          <Link href={""}>Cart(1) </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
