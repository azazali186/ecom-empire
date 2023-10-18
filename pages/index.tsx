import { categoryData } from "@/components/data/categoryData";
import { newArrivals, topProducts } from "@/components/data/productData";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Banner from "@/components/landing/banner/Banner";
import SideBanner from "@/components/landing/banner/SideBanner";
import TopBanner from "@/components/landing/top-banner/TopBanner";
import { Product } from "@/components/product/ProductCard";
import ProductSlider from "@/components/product/ProductSlider";
import Slide from "@/components/product/Slide";
import React from "react";

const index = () => {
  const mainImages = [
    "https://picsum.photos/1980/250?random=10.webp",
  ];

  
  return (
    <div className=" bg-orange-50  h-screen">
      <Header />
      <div className="scrollable-container h-[90vh]">
        <TopBanner />
        <ProductSlider products={newArrivals} title={"New Arrivals"} />
        <div className="flex justify-between items-center w-full px-1 mb-2">
          <Banner
            images={mainImages}
            styles={{ width: "100%", height: "8vh" }}
            autoplayInterval={2000}
          />
        </div>
        <ProductSlider products={topProducts} title={"Top Deals"} />
        <div className="flex justify-between items-center w-full px-1 mb-2">
        <Banner
            images={mainImages}
            styles={{ width: "100%", height: "8vh" }}
            autoplayInterval={2000}
          />
        </div>
        <ProductSlider products={newArrivals} title={"Popular Products"} />
        <div className="flex justify-between items-center w-full px-1 mb-2">
        <Banner
            images={mainImages}
            styles={{ width: "100%", height: "8vh" }}
            autoplayInterval={2000}
          />
        </div>
        <div></div>
        <ProductSlider products={categoryData} title={"Top Categories"} />
      </div>

      <Footer />
    </div>
  );
};

export default index;
