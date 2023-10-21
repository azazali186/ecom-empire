/* eslint-disable react-hooks/rules-of-hooks */
import CategorySlider from "@/components/catagory/CategorySlider";
import { categoryData } from "@/components/data/categoryData";
import {
  NewArrivals,
  TopDeals,
  PopularProducts,
} from "@/components/data/productData";
import Banner from "@/components/landing/banner/Banner";
import SideBanner from "@/components/landing/banner/SideBanner";
import TopBanner from "@/components/landing/top-banner/TopBanner";
import MainLayout from "@/components/layouts";
import ProductSlider from "@/components/product/ProductSlider";
import { useMediaQuery } from "@mui/material";
import React from "react";

type LandingPageProps = {
  data: {
    NewArrivals: [];
    TopDeals: [];
    PopularProducts: [];
    categoryData: [];
  };
};

const index: React.FC<LandingPageProps> = ({ data }) => {
  const mainImages = ["https://picsum.photos/1980/250?random=100.webp"];
  const mainImages1 = ["https://picsum.photos/1980/250?random=110.webp"];
  const mainImages2 = ["https://picsum.photos/1980/250?random=120.webp"];
  const longImageLeft = ["https://picsum.photos/250/1980?random=12.webp"];
  const longImageRight = ["https://picsum.photos/250/1980?random=115.webp"];

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <MainLayout>
      <TopBanner />
      <div className="flex px-5">
        <SideBanner
          images={longImageLeft}
          styles={{ height: "auto", width : isSmallScreen ? "100%" : "15%" }}
          sliderStyles={{ height: "100%" }}
        />
        <div className="flex flex-col">
          <ProductSlider products={data.NewArrivals} title={"New Arrivals"} />
          <div className="flex justify-between items-center w-full px-1 mb-2">
            <Banner
              images={mainImages}
              styles={{ width: "100%", height: "8vh" }}
              autoplayInterval={2000}
            />
          </div>
          <ProductSlider products={data.TopDeals} title={"Top Deals"} />
          <div className="flex justify-between items-center w-full px-1 mb-2">
            <Banner
              images={mainImages1}
              styles={{ width: "100%", height: "8vh" }}
              autoplayInterval={2000}
            />
          </div>
          <ProductSlider
            products={data.PopularProducts}
            title={"Popular Products"}
          />
          <div className="flex justify-between items-center w-full px-1 mb-2">
            <Banner
              images={mainImages2}
              styles={{ width: "100%", height: "8vh" }}
              autoplayInterval={2000}
            />
          </div>
          <CategorySlider
            category={data.categoryData}
            title={"Top Categories"}
          />
        </div>
        <SideBanner
          images={longImageRight}
          styles={{ height: "auto", width : isSmallScreen ? "100%" : "15%" }}
          sliderStyles={{ height: "100%" }}
        />
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const data = {
    NewArrivals,
    PopularProducts,
    TopDeals,
    categoryData,
  };
  return { props: { data } };
}

export default index;
