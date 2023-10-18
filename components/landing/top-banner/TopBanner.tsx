import React from "react";
import Banner from "../banner/Banner";
import SideBanner from "../banner/SideBanner";

const TopBanner = () => {
    const leftImages = [
        "https://picsum.photos/300/250?random=1",
        "https://picsum.photos/300/250?random=2",
        "https://picsum.photos/300/250?random=3",
        "https://picsum.photos/300/250?random=4",
        "https://picsum.photos/300/250?random=5",
        "https://picsum.photos/300/250?random=6",
    ]
    const mainImages = [
        "https://picsum.photos/1024/250?random=1",
        "https://picsum.photos/1024/250?random=2",
        "https://picsum.photos/1024/250?random=3",
        "https://picsum.photos/1024/250?random=4",
        "https://picsum.photos/1024/250?random=5",
        "https://picsum.photos/1024/250?random=6",
    ]
    const rightImages = [
        "https://picsum.photos/300/250?random=1",
        "https://picsum.photos/300/250?random=2",
        "https://picsum.photos/300/250?random=3",
        "https://picsum.photos/300/250?random=4",
        "https://picsum.photos/300/250?random=5",
        "https://picsum.photos/300/250?random=6",
    ]
  return (
    <div className="flex justify-between items-center w-full px-1 mb-2">
      <SideBanner images={leftImages} autoplayInterval={2500} />
      <Banner images={mainImages}  autoplayInterval={3000} styles={{ width: '69.5%' }}/>
      <SideBanner images={rightImages}  autoplayInterval={2500}/>
    </div>
  );
};

export default TopBanner;
