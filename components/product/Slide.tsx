import Link from "next/link";
import ProductCard, { Product } from "./ProductCard";

type SlideProps = {
  products: Product[];
  slug: string;
};

const Slide: React.FC<SlideProps> = ({ products, slug }) => {
  return (
    <div className="flex flex-wrap overflow-x-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Link href={`/tags/${slug}`} className="p-4 bg-orange-400 rounded-lg text-orange-50 self-center">
        View More
      </Link>
    </div>
  );
};

export default Slide;
