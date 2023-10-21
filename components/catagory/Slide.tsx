import Link from "next/link";
import CategoryCard, { Category } from "./CategoryCard";

type SlideProps = {
  categories: Category[];
  slug: string;
};

const Slide: React.FC<SlideProps> = ({ categories, slug }) => {
  return (
    <div className="flex flex-wrap justify-center overflow-x-auto">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
      <Link href={`/tags/${slug.toLowerCase().replaceAll(" ", "-")}`} className="p-4 bg-orange-400 rounded-lg text-orange-50 self-center">
        View More
      </Link>
    </div>
  );
};

export default Slide;
