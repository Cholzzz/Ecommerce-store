'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  const { getTotalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            ShopHub
          </Link>
          
          <nav className="hidden md:flex md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Hem
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900">
              Produkter
            </Link>
          </nav>

          <Link
            href="/cart"
            className="relative flex items-center space-x-2 rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="font-medium">Varukorg</span>
            {getTotalItems() > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
