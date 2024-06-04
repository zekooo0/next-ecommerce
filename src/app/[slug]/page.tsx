import AddToCart from "@/components/AddToCart";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="relative flex lg:flex-row flex-col gap-16 px-4 md:px-8 lg:px-16">
      {/* IMG */}
      <div className="top-20 lg:sticky w-full lg:w-1/2 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <h1 className="font-medium text-4xl">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          odio perspiciatis in veritatis quae modi voluptates recusandae. Illum,
          eius odio nihil magnam tempore a officia quidem ipsa incidunt libero?
          Iste!
        </p>
        <div className="bg-gray-100 h-[2px]" />
        <div className="flex items-center gap-4">
          <h3 className="text-gray-500 text-xl line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="bg-gray-200 h-[2px]" />
        <CustomizeProducts />
        <AddToCart />
        <div className="bg-gray-200 h-[2px]" />
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
            consequatur vitae quia eveniet facere in sequi, porro provident a
            tenetur enim atque? Quia deleniti vitae libero. Rem eius repudiandae
            amet?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
            consequatur vitae quia eveniet facere in sequi, porro provident a
            tenetur enim atque? Quia deleniti vitae libero. Rem eius repudiandae
            amet?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
            consequatur vitae quia eveniet facere in sequi, porro provident a
            tenetur enim atque? Quia deleniti vitae libero. Rem eius repudiandae
            amet?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
