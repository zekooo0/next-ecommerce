"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="top-12 right-0 z-20 absolute flex flex-col gap-6 bg-white shadow-md p-4 border rounded-md w-max">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* Item */}
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.unsplash.com/photo-1716847214612-e2c2f3771d41?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="product image"
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <div className="flex justify-between items-center gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <p className="bg-gray-50 p-1 rounded-sm">49$</p>
                  </div>
                  <div className="text-gray-500 text-sm">available</div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center font-semibold">
              <span>SubTotal</span>
              <span>49$</span>
            </div>
            <p className="mt-2 mb-4 text-gray-500 text-sm">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="px-4 py-3 rounded-md ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="bg-black px-4 py-3 rounded-md text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
