import Filter from "@/components/Filter";
import Image from "next/image";
import ProductList from "@/components/ProductList";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* campaign */}
      <div className="sm:flex justify-between hidden bg-pink-50 px-4 h-64">
        <div className="flex flex-col justify-center items-center gap-8 w-2/3">
          <h1 className="font-semibold text-4xl text-gray-700 leading-[48px]">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="bg-main px-5 py-3 rounded-3xl text-white">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src={"/chair.png"}
            alt=" campaign image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      {/* Products */}
      <h1 className="mt-12 font-semibold text-xl">Furniture For Every Home</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
