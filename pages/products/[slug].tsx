import SideBanner from "@/components/landing/banner/SideBanner";
import MainLayout from "@/components/layouts";
import { Product } from "@/components/product/ProductCard";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
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
          <div className="w-[25%]  bg-orange-100">
            <SideBanner
              images={product.images}
              styles={{ height: "50vh", width: isSmallScreen ? "100%" : "100%" }}
              sliderStyles={{ height: "100%" }}
            />
          </div>
          <div>Item Details</div>
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
