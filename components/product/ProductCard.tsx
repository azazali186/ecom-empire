/* eslint-disable @next/next/no-img-element */
import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import Link from "next/link";
// components/ProductCard.tsx
export type Ratings = {
  rate: number;
  count: number;
};
export type Product = {
  id: number;
  title: string;
  slug?: string;
  price: number;
  thumbnail: string;
  images: string[];
  description?: string;
  likes?: number;
  rating?: string;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const defaultClass =
    "bg-orange-100 min-w-fit p-4 my-4 shadow-lg rounded-md cursor-pointer";
  const title =
    product.title.length > 30
      ? product.title.substring(0, 30) + "..."
      : product.title;

      const getPrice = () => {
        const price = ((100 - product.discountPercentage) * product.price ) / 100
        return price
      }

  return (
    <div className="flipper h-full text-sm">
      <div
        className={
          isSmallScreen
            ? defaultClass + " front "
            : defaultClass + " front mr-6 "
        }
      >
        <Image
          src={product?.thumbnail}
          alt={title}
          className="w-48 h-48 object-cover rounded-t-md"
          width="186"
          height="186"
        />
        <h3 className="text-xs mt-2">{title}</h3>
        <p className="text-orange-400 text-xs flex justify-between items-center font-bold">
          <span className="flex gap-5 items-center">
          <span className="flex flex-col">
              <span className="text-10"><span className="line-through ">${product.price}</span> {product.discountPercentage > 0 && (
              <span className=" ml-2" title="">
                {product.discountPercentage > 0
                  ? "Off " +product.discountPercentage.toFixed(2)
                  : product.discountPercentage.toFixed(2)}
                %
              </span>
            )}</span>
                <span>${getPrice().toFixed(2)}</span>
              </span>
            
          </span>
          <span className="gap-2 flex justify-between items-center">
            <FavoriteIcon />
            {product?.rating || 0}
          </span>
        </p>
      </div>
      <div
        className={
          isSmallScreen ? defaultClass + " back " : defaultClass + " back mr-6 "
        }
      >
        <Link
          href={`/products/${
            product?.slug?.toLowerCase().replaceAll(" ", "-") || product.id
          }`}
        >
          <p className="w-48 flex justify-center items-center h-48 mb-5 text-orange-400 font-bold divide-y-8 overflow-y-auto no-scrollbar">
            {product.description}
          </p>
        </Link>
        {product.price ? (
          <div className="flex justify-center items-center gap-2">
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
