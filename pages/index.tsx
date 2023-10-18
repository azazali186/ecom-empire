import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Banner from "@/components/landing/banner/Banner";
import SideBanner from "@/components/landing/banner/SideBanner";
import TopBanner from "@/components/landing/top-banner/TopBanner";
import React from "react";

const index = () => {
  return (
    <div className=" bg-orange-50  h-screen">
      <Header />

      <div className="scrollable-container h-[90vh]">
        <TopBanner />
        <div>New Arrivals</div>
        <div className="flex justify-between items-center w-full px-1 mb-2">
          <Banner images={[]} styles={{ width: '100%' }}/>
        </div>
        <div>Top Deals</div>
        <div className="flex justify-between items-center w-full px-1 mb-2">
          <SideBanner images={[]} />
          <Banner images={[]} styles={{ width: '69.5%' }}/>
          <SideBanner images={[]} />
        </div>
        <div>Popular Products</div>
        <div className="flex justify-between items-center w-full px-1 mb-2">
          <SideBanner images={[]} />
          <Banner images={[]} styles={{ width: '69.5%' }}/>
          <SideBanner images={[]} />
        </div>
        <div>Top Categories</div>

      </div>

      <Footer />
    </div>
  );
};

export default index;
