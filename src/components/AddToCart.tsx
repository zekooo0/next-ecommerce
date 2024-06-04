"use client";

import { Minus, Plus } from "lucide-react";

import { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const STOCK = 4;
  const handleQuantity = (action: "increase" | "decrease") => {
    if (action === "increase" && quantity < STOCK) {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4>Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          {/*  add quantity */}
          <div className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded-3xl w-32">
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("decrease")}
            >
              <Minus />
            </button>
            {quantity}
            <button onClick={() => handleQuantity("increase")}>
              <Plus />
            </button>
          </div>
          {/*    */}
          <div className="text-xs">
            Only <span className="text-orange-500"> 4 items</span> left! <br />
            {"Don't"}
            miss it
          </div>
        </div>
        {/* add to cart */}
        <button className="hover:bg-main disabled:bg-pink-200 px-4 py-2 rounded-3xl w-36 text-main text-sm hover:text-white disabled:text-white disabled:cursor-not-allowed ring-1 ring-main disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
