import { categoryData } from "@/components/data/categoryData";
import { NewArrivals, TopDeals, PopularProducts } from "@/components/data/productData";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Banner from "@/components/landing/banner/Banner";
import SideBanner from "@/components/landing/banner/SideBanner";
import TopBanner from "@/components/landing/top-banner/TopBanner";
import ProductSlider from "@/components/product/ProductSlider";
import { Height } from "@mui/icons-material";
import React from "react";

const index = () => {
  const mainImages = ["https://picsum.photos/1980/250?random=10.webp"];
const longImageLeft = ["https://picsum.photos/250/1980?random=12.webp"];
const longImageRight = ["https://picsum.photos/250/1980?random=115.webp"];

  return (
    <div className=" bg-orange-50  h-screen">
      <Header />
      <div className="scrollable-container h-[90vh]">
        <TopBanner />
        <div className="flex px-5">
          <SideBanner images={longImageLeft} styles={{height : "auto"}} sliderStyles={{height: "100%"}}/>
          <div className="flex flex-col">
            <ProductSlider products={NewArrivals} title={"New Arrivals"} />
            <div className="flex justify-between items-center w-full px-1 mb-2">
              <Banner
                images={mainImages}
                styles={{ width: "100%", height: "8vh" }}
                autoplayInterval={2000}
              />
            </div>
            <ProductSlider products={TopDeals} title={"Top Deals"} />
            <div className="flex justify-between items-center w-full px-1 mb-2">
              <Banner
                images={mainImages}
                styles={{ width: "100%", height: "8vh" }}
                autoplayInterval={2000}
              />
            </div>
            <ProductSlider products={PopularProducts} title={"Popular Products"} />
            <div className="flex justify-between items-center w-full px-1 mb-2">
              <Banner
                images={mainImages}
                styles={{ width: "100%", height: "8vh" }}
                autoplayInterval={2000}
              />
            </div>
            <ProductSlider products={categoryData} title={"Top Categories"} />
          </div>
          <SideBanner images={longImageRight} styles={{height : "auto"}} sliderStyles={{height: "100%"}}/>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
