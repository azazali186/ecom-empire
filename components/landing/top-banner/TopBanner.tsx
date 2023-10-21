import React from "react";
import Banner from "../banner/Banner";
import SideBanner from "../banner/SideBanner";
import { useMediaQuery } from "@mui/material";

const TopBanner = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
    const leftImages = [
        "https://picsum.photos/300/250?random=1.webp",
        "https://picsum.photos/300/250?random=2.webp",
        "https://picsum.photos/300/250?random=3.webp",
        "https://picsum.photos/300/250?random=4.webp",
        "https://picsum.photos/300/250?random=5.webp",
        "https://picsum.photos/300/250?random=6.webp",
    ]
    const mainImages = [
        "https://picsum.photos/1024/250?random=1.webp",
        "https://picsum.photos/1024/250?random=2.webp",
        "https://picsum.photos/1024/250?random=3.webp",
        "https://picsum.photos/1024/250?random=4.webp",
        "https://picsum.photos/1024/250?random=5.webp",
        "https://picsum.photos/1024/250?random=6.webp",
    ]
    const rightImages = [
        "https://picsum.photos/300/250?random=1.webp",
        "https://picsum.photos/300/250?random=2.webp",
        "https://picsum.photos/300/250?random=3.webp",
        "https://picsum.photos/300/250?random=4.webp",
        "https://picsum.photos/300/250?random=5.webp",
        "https://picsum.photos/300/250?random=6.webp",
    ]
  return (
    
    <div className="flex justify-between items-center w-full px-1 mb-2">
      {!isSmallScreen && <SideBanner images={leftImages} autoplayInterval={2200} styles={{ height:"25vh"}} />}
      <Banner images={mainImages}  autoplayInterval={2800} styles={{ width: isSmallScreen ? "100%" :'69.5%', height: isSmallScreen ? "15vh" :"25vh" }}/>
      {!isSmallScreen && <SideBanner images={rightImages}  autoplayInterval={2200} styles={{ height: "25vh"}}/>}
    </div>
  );
};

export default TopBanner;
