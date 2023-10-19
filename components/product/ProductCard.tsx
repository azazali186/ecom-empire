/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// components/ProductCard.tsx
export type Product = {
  id: number;
  name: string;
  price?: number;
  imageUrl: string;
  desc?: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flipper h-full">
      <div className="bg-orange-100 front min-w-fit p-4 my-4 mr-6 shadow-lg rounded-md cursor-pointer">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-48 h-48 object-cover rounded-t-md"
        />
        <h3 className="text-lg mt-2">{product.name}</h3>
        {product?.price ? (
          <p className="text-orange-400 font-bold">
            ${product?.price?.toFixed(2)}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="bg-orange-100 back min-w-fit p-4 my-4 mr-6 shadow-lg rounded-md cursor-pointer">
        <p className="w-48 flex justify-center items-center h-44 mb-5 text-orange-400 font-bold divide-y-8 overflow-auto">
          {product.desc}
        </p>
        {product.price ? (
          <div className="flex justify-center items-center gap-2 py-2">
            <Button variant="outlined" className="cart-buy-btn hover:scale-105">
              <AddIcon /> Cart
            </Button>
            <Button variant="outlined" className="cart-buy-btn hover:scale-105">
              <ShoppingBagIcon /> Buy
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
