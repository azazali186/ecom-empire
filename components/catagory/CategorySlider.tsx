import React from "react";
import Slide from "./Slide";
import { Category } from "./CategoryCard";

type CategorySliderProps = {
  category: Category[];
  title: string;
};

const CategorySlider: React.FC<CategorySliderProps> = ({ category, title }) => {
  return (
    <div className="px-5 pb-5 flex flex-col gap-4 my-3">
      <p className="text-center text-2xl font-bold text-orange-400">
        {title}
      </p>
      <div>
        <Slide categories={category} slug={title} />
      </div>
    </div>
  );
};

export default CategorySlider;
