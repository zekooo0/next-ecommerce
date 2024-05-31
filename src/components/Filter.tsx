import React from "react";

const Filter = () => {
  return (
    <div className="flex justify-between mt-12">
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id="type"
          className="bg-[#EBEDED] px-4 py-2 rounded-2xl font-medium text-xs"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="pl-2 rounded-2xl w-24 text-xs ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="pl-2 rounded-2xl w-24 text-xs ring-1 ring-gray-400"
        />
        <select
          name="size"
          id="size"
          className="bg-[#EBEDED] px-4 py-2 rounded-2xl font-medium text-xs"
        >
          <option>Size</option>
          <option value="">Physical</option>
          <option value="">Digital</option>
        </select>
        <select
          name="color"
          id="color"
          className="bg-[#EBEDED] px-4 py-2 rounded-2xl font-medium text-xs"
        >
          <option>Color</option>
          <option value="">Physical</option>
          <option value="">Digital</option>
        </select>
        <select
          name="category"
          id="category"
          className="bg-[#EBEDED] px-4 py-2 rounded-2xl font-medium text-xs"
        >
          <option>Category</option>
          <option value="">Physical</option>
          <option value="">Digital</option>
        </select>
        <select
          name="filters"
          id="filters"
          className="bg-[#EBEDED] px-4 py-2 rounded-2xl font-medium text-xs"
        >
          <option>All Filters</option>
          <option value="">Physical</option>
          <option value="">Digital</option>
        </select>
      </div>
      <div>
        <select
          name="type"
          id="type"
          className="bg-[#EBEDED] px-4 py-2 rounded-2xl font-medium text-xs"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
