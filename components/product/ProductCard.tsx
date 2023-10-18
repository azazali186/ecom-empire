/* eslint-disable @next/next/no-img-element */
import React from 'react'

// components/ProductCard.tsx
export type Product = {
    id: number;
    name: string;
    price?: number;
    imageUrl: string;
};

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-orange-100 min-w-fit p-4 shadow-md rounded-md">
            <img src={product.imageUrl} alt={product.name} className="w-48 h-48 object-cover rounded-t-md" />
            <h2 className="text-lg mt-2">{product.name}</h2>
            {product?.price ? <p className="text-orange-400">${product?.price?.toFixed(2)}</p> : ""}
        </div>
    );
};

export default ProductCard;
