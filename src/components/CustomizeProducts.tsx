const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="relative bg-red-500 rounded-full w-8 h-8 cursor-pointer ring-1 ring-gray-300">
          <div className="top-1/2 left-1/2 absolute rounded-full w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 ring-2"></div>
        </li>
        <li className="relative bg-blue-500 rounded-full w-8 h-8 cursor-pointer ring-1 ring-gray-300"></li>
        <li className="relative bg-green-500 rounded-full w-8 h-8 cursor-not-allowed ring-1 ring-gray-300">
          <div className="top-1/2 left-1/2 absolute bg-red-400 rounded-full w-10 h-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="px-4 py-1 rounded-md text-main text-sm cursor-pointer ring-1 ring-main">
          Small
        </li>
        <li className="bg-main px-4 py-1 rounded-md text-sm text-white cursor-pointer ring-1 ring-main">
          Medium
        </li>
        <li className="bg-pink-200 px-4 py-1 rounded-md text-sm text-white cursor-not-allowed ring-1 ring-pink-200">
          Large
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProducts;
