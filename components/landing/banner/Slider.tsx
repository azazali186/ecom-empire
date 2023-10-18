/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
// pages/Slider.tsx

import { useEffect, useState } from "react";

type SliderProps = {
  images: string[];
  autoplayInterval?: number; // in milliseconds
};

const Slider: React.FC<SliderProps> = ({ images, autoplayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    // Clean up the interval when the component is unmounted or when the autoplay interval changes
    return () => clearInterval(interval);
  }, [currentIndex, autoplayInterval]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-60 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute top-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
            index === currentIndex ? "translate-x-0" : "translate-x-full"
          }`}
        />
      ))}
      <button
        onClick={prevSlide}
        className="absolute bottom-3 left-0 p-4 text-white"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute bottom-3 right-0 p-4 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
