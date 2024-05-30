import Link from "next/link";
import Menu from "./Menu";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-16 h-20">
      {/* MOBILE */}
      <div className="flex justify-between items-center md:hidden h-full">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">ZEKO</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="md:flex justify-between items-center gap-8 hidden h-full">
        <div className="flex items-center gap-12 w-1/3 xl:w-1/2">
          <Link href={"/"} className="flex items-center gap-3">
            <ShoppingBag />
            <div className="text-2xl tracking-wide">ZEKO</div>
          </Link>
          <div className="xl:flex gap-4 hidden">
            <Link href={""}>Homepage</Link>
            <Link href={""}>Shop</Link>
            <Link href={""}>Deals</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
            <Link href={""}>Logout</Link>
            <Link href={""}>Cart(1) </Link>
          </div>
        </div>
        <div className="flex justify-between items-center gap-8 w-2/3 xl:w-1/2">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
