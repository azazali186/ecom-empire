import ProductCard, { Product } from "./ProductCard";

type SlideProps = {
  products: Product[];
};

const Slide: React.FC<SlideProps> = ({ products }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <button className="p-4 bg-orange-400 text-orange-50 self-center">
        View More
      </button>
    </div>
  );
};

export default Slide;
