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
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Produkt hittades inte</h1>
          <Link href="/products" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tillbaka till produkter
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-md">
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
            <h1 className="mb-4 text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="mb-6 text-xl text-blue-600 font-semibold">{product.price} kr</p>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">{product.description}</p>

            <div className="mb-8">
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
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

            <div className="mt-8 border-t pt-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Produktinformation</h3>
              <ul className="space-y-2 text-gray-600">
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
