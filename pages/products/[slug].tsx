import SideBanner from "@/components/landing/banner/SideBanner";
import MainLayout from "@/components/layouts";
import { Product } from "@/components/product/ProductCard";
import { useMediaQuery } from "@mui/material";
import React from "react";
type ProductDetailsProps = {
  data: {
    product: Product;
  };
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const product = data.product;
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <MainLayout>
      <div className="flex mx-20 mt-20 flex-col">
        <div className="flex">
          <div className="w-[25%] mr-20 bg-orange-100">
            <SideBanner
              images={product.images}
              styles={{ height: "50vh", width: isSmallScreen ? "100%" : "100%" }}
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
              <div className="mt-2 text-xl font-bold text-orange-400">
                Price : ${product.price?.toFixed(2)}
              </div>
              <div className="mt-2 capitalize text-xl font-bold text-orange-400">
                Category : {product.category}
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

export async function getServerSideProps(ctx) {
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
