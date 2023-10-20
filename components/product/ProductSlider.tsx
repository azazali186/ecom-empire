import React from "react";
import Slide from "./Slide";
import { Product } from "./ProductCard";

type ProductSliderProps = {
  products: Product[];
  title: string;
};

const ProductSlider: React.FC<ProductSliderProps> = ({ products, title }) => {
  return (
    <div className="px-5 pb-5 flex flex-col gap-4 my-3">
      <p className="text-center text-2xl font-bold text-orange-400">
        {title}
      </p>
      <div>
        <Slide products={products} slug={title.replaceAll(" ", "-").toLowerCase()} />
      </div>
    </div>
  );
};

export default ProductSlider;
