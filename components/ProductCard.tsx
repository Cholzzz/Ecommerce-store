'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md transition-shadow hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{product.description}</p>
        </Link>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price} kr</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm font-medium">Köp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
