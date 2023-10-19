import CategoryCard, { Category } from "./CategoryCard";

type SlideProps = {
  categories: Category[];
};

const Slide: React.FC<SlideProps> = ({ categories }) => {
  return (
    <div className="flex flex-wrap overflow-x-auto">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
      <button className="p-4 bg-orange-400 text-orange-50 self-center">
        View More
      </button>
    </div>
  );
};

export default Slide;
