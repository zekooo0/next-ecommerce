"use client";

import { Bell, ShoppingCart, User } from "lucide-react";

import CartModal from "./CartModal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = true;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };
  const handleCart = () => {
    if (isProfileOpen) {
      setIsProfileOpen(false);
    }
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <User className="cursor-pointer" onClick={handleProfile} />
      {isProfileOpen && (
        <div className="top-12 left-0 z-20 absolute flex flex-col gap-3 shadow-md p-4 border rounded-md">
          <Link href={"/"}>Profile</Link>
          <div className="flex mt-2">Logout</div>
        </div>
      )}
      <Bell className="cursor-pointer" />
      <div className="relative cursor-pointer" onClick={handleCart}>
        <ShoppingCart />
        <div className="-top-4 -right-4 absolute flex justify-center items-center bg-main rounded-full w-6 h-6 text-sm text-white">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
