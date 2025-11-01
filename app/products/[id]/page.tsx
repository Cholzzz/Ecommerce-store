'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Produkt hittades inte</h1>
          <Link href="/products" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            Tillbaka till produkter
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tillbaka till produkter
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md transition-colors">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            <p className="mb-6 text-xl text-blue-600 dark:text-blue-400 font-semibold">{product.price} kr</p>
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{product.description}</p>

            <div className="mb-8">
              <span className="inline-block rounded-full bg-green-100 dark:bg-green-900 px-4 py-2 text-sm font-semibold text-green-800 dark:text-green-200">
                {product.inStock ? 'I lager' : 'Slutsåld'}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex items-center justify-center space-x-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Lägg i varukorg</span>
            </button>

            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Produktinformation</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <strong>Kategori:</strong> {product.category}
                </li>
                <li>
                  <strong>Lagerstatus:</strong> {product.inStock ? 'I lager' : 'Slutsåld'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
