import React, { useState } from 'react'
import Slider from './Slider'

type BannerProps = {
    images: string[];
    autoplayInterval?: number;
    height?: string;
    styles?: React.CSSProperties;
  };


  const Banner: React.FC<BannerProps> = ({ images, autoplayInterval = 3000, height = "20vh", styles ={} }) => {
    return (
      <div className={`h-[${height}] bg-orange-100 flex items-center justify-center overflow-hidden shadow-lg`} style={styles} >
          <Slider images={images} autoplayInterval={autoplayInterval} />
      </div>
    );
  }

export default Banner