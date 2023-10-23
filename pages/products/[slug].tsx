import SideBanner from "@/components/landing/banner/SideBanner";
import MainLayout from "@/components/layouts";
import { Product } from "@/components/product/ProductCard";
import { Button, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import React from "react";
type ProductDetailsProps = {
  data: {
    product: Product;
  };
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const product = data.product;
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  console.log(product);


  const getPrice = () => {
    const price = ((100 - product.discountPercentage) * product.price ) / 100
    return price
  }


  return (
    <MainLayout>
      <div className="flex mx-20 mt-20 flex-col">
        <div className="flex">
          <div className="w-[25%] mr-20 bg-orange-100">
            <SideBanner
              images={product.images}
              styles={{
                height: "50vh",
                width: isSmallScreen ? "100%" : "100%",
              }}
              sliderStyles={{ height: "100%" }}
            />
          </div>
          <div className="">
            <div className="font-bold text-4xl text-orange-400">
              {product.title}
            </div>
            <div className="mt-5 text-xl font-bold text-orange-400">
              Stock : {product.stock}
            </div>
            <div className="mt-2 text-xl flex gap-5 items-center font-bold text-orange-400">
              Price : 
              <span className="flex flex-col">
                <span className="text-xs line-through">${product.price}</span> 
                <span>${getPrice().toFixed(2)}</span>
              </span>
              <span className="">(Off <span className="text-3xl">{product.discountPercentage}</span>%)</span>
            </div>
            <div className="mt-2 capitalize text-xl font-bold text-orange-400">
              Category : {product.category}
            </div>
            <div className="mt-2 capitalize text-xl font-bold text-orange-400">
              Rate : <span className="underline">{product?.rating || 0}</span>
            </div>
            <div className="mt-2 capitalize text-xl gap-5 w-[100%] flex mt-10 font-bold text-orange-400">
              <Button
                variant="outlined"
                className="cart-buy-btn hover:scale-105"
              >
                <AddIcon /> Cart
              </Button>
              <Button
                variant="outlined"
                className="cart-buy-btn hover:scale-105"
              >
                <ShoppingBagIcon /> Buy
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 ">
          <div>{product.description}</div>
          <div>{/* ratings & review */}</div>
        </div>
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps(ctx: { query: { slug: any; }; }) {
  const { slug } = ctx.query;
  const product = await (
    await fetch(`https://dummyjson.com/products/${slug}`)
  ).json();

  const data = {
    product: product,
  };

  return { props: { data } };
}

export default ProductDetails;
