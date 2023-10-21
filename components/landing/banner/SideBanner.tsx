import React from 'react'
import Slider from './Slider'



type SideBannerProps = {
    images: string[];
    autoplayInterval?: number;
    styles?: React.CSSProperties;
    sliderStyles?: React.CSSProperties;
  };

const SideBanner: React.FC<SideBannerProps> = ({images, autoplayInterval = 3000, styles ={}, sliderStyles={} }) => {

  return (
    <div className='w-[15%] bg-orange-100 flex p-5 items-center justify-center overflow-hidden shadow-lg' style={styles}>
        <Slider images={images} autoplayInterval={autoplayInterval} styles={sliderStyles}/>
    </div>
  )
}

export default SideBanner