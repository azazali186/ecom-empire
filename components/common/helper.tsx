import { Product } from "../product/ProductCard";

export const getRandomProducts = (products: Product[], count: number) => {
    let shuffled = products.slice(0); // Create a clone of the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled.slice(0, count);
  };