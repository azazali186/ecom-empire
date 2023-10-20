/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Category = {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  desc?: string;
};

type CategoryCardProps = {
  category: Category;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="bg-orange-100 front min-w-fit p-4 my-4 mr-6 shadow-lg rounded-md cursor-pointer">
      <Link
        href={`/catagories/${category.slug.toLowerCase().replaceAll(" ", "-")}`}
      >
        <Image
          src={category.imageUrl}
          alt={category.name}
          className="w-48 h-48 object-cover rounded-t-md"
          width="186"
          height="186"
        />
        <h3 className="text-lg mt-2">{category.name}</h3>
      </Link>
    </div>
  );
};

export default CategoryCard;
