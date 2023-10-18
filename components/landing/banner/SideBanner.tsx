import React from 'react'
import Slider from './Slider'



type SideBannerProps = {
    images: string[];
    autoplayInterval?: number;
  };

const SideBanner: React.FC<SideBannerProps> = ({images, autoplayInterval = 3000 }) => {

  return (
    <div className='w-[15%] h-[20vh] bg-orange-100 flex items-center justify-center overflow-hidden shadow-lg'>
        <Slider images={images} autoplayInterval={autoplayInterval} />
    </div>
  )
}

export default SideBanner