import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-24 px-4 md:px-8 lg:px-16 py-24 text-sm m">
      {/* TOP */}
      <div className="flex md:flex-row flex-col justify-between gap-24">
        {/* LEFT */}
        <div className="flex flex-col gap-8 w-full md:w-1/2 lg:w-1/4">
          <Link href={"/"} className="flex items-center gap-3">
            <ShoppingBag />
            <div className="text-2xl tracking-wide">ZEKO</div>
          </Link>
          <p>Cairo, Egypt</p>
          <span className="font-semibold">hello@zeko.com</span>
          <span className="font-semibold">+1 234 567 890</span>
          <div className="flex gap-6">
            <Image
              src={"/facebook.png"}
              width={16}
              height={16}
              alt="facebook logo"
            />
            <Image
              src={"/instagram.png"}
              width={16}
              height={16}
              alt="instagram logo"
            />
            <Image
              src={"/youtube.png"}
              width={16}
              height={16}
              alt="youtube logo"
            />
            <Image
              src={"/pinterest.png"}
              width={16}
              height={16}
              alt="pinterest logo"
            />
            <Image src={"/x.png"} width={16} height={16} alt="x logo" />
          </div>
        </div>
        {/* CENTER */}
        <div className="lg:flex justify-between hidden w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>About Us</Link>
              <Link href={""}>Careers</Link>
              <Link href={""}>Affiliates</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Contact</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>About Us</Link>
              <Link href={""}>Careers</Link>
              <Link href={""}>Affiliates</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Contact</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>About Us</Link>
              <Link href={""}>Careers</Link>
              <Link href={""}>Affiliates</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Contact</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-col gap-8 w-full md:w-1/2 lg:w-1/4">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about furniture, promotions, and
            much more!
          </p>
          <div className="flex">
            <input type="text" placeholder="Email" className="p-4 w-3/4" />
            <button className="bg-main w-1/4 text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image
              src={"/discover.png"}
              width={40}
              height={20}
              alt={"discover"}
            />
            <Image src={"/skrill.png"} width={40} height={20} alt={"skrill"} />
            <Image src={"/paypal.png"} width={40} height={20} alt={"paypal"} />
            <Image
              src={"/mastercard.png"}
              width={40}
              height={20}
              alt={"mastercard"}
            />
            <Image src={"/visa.png"} width={40} height={20} alt={"visa"} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-8 mt-16">
        <div>
          ©2024{" "}
          <a
            className="font-bold text-blue-600"
            href={"https://www.linkedin.com/in/zekooo0/"}
          >
            {" "}
            ZEKO
          </a>
          .
        </div>
        <div className="flex md:flex-row flex-col gap-8">
          <div>
            <span className="mr-4 text-gray-500">Language</span>
            <span className="font-medium">Egypt | English</span>
          </div>
          <div>
            <span className="mr-4 text-gray-500">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
