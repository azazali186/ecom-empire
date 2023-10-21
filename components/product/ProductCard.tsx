/* eslint-disable @next/next/no-img-element */
import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import Link from "next/link";
// components/ProductCard.tsx
export type Product = {
  id: number;
  name: string;
  slug: string;
  price?: number;
  imageUrl: string;
  desc?: string;
  likes?: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const defaultClass = "bg-orange-100 min-w-fit p-4 my-4 shadow-lg rounded-md cursor-pointer"

  return (
    <div className="flipper h-full text-sm">
      <div className={ isSmallScreen ? defaultClass +" front " : defaultClass + " front mr-6 "}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="w-48 h-48 object-cover rounded-t-md" width="186" height="186"
        />
        <h3 className="text-base mt-2">{product.name}</h3>
          <p className="text-orange-400 flex justify-between items-center font-bold">
            <span>${product?.price?.toFixed(2)}</span>
            <span className="gap-2 flex"><FavoriteIcon />{ product.likes || 0 }</span>
            
          </p>
      </div>
      <div className={  isSmallScreen ? defaultClass +" back " : defaultClass + " back mr-6 "}>
        <Link href={`/products/${product.slug.toLowerCase().replaceAll(" ", "-")}`}>
        <p className="w-48 flex justify-center items-center h-48 mb-5 text-orange-400 font-bold divide-y-8 overflow-y-auto no-scrollbar">
          {product.desc}
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

