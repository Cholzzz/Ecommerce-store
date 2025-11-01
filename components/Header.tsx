'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';
import { ShoppingCart, Moon, Sun } from 'lucide-react';

export default function Header() {
  const { getTotalItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            ShopHub
          </Link>
          
          <nav className="hidden md:flex md:space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Hem
            </Link>
            <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Produkter
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Cart Link */}
            <Link
              href="/cart"
              className="relative flex items-center space-x-2 rounded-lg bg-gray-100 dark:bg-gray-700 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium text-gray-900 dark:text-white">Varukorg</span>
              {getTotalItems() > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
