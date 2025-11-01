'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-600" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Din varukorg är tom</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Lägg till några produkter för att komma igång!</p>
            <Link
              href="/products"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Fortsätt handla
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Varukorg</h1>
          <button
            onClick={clearCart}
            className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
          >
            Rensa varukorg
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col gap-4 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md sm:flex-row transition-colors"
              >
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 sm:w-32">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.product.price} kr</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="rounded-lg border border-gray-300 dark:border-gray-600 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center font-semibold text-gray-900 dark:text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="rounded-lg border border-gray-300 dark:border-gray-600 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center space-x-4">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.product.price * item.quantity} kr
                      </p>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md transition-colors">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Ordersammanfattning</h2>
              
              <div className="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Delsumma</span>
                  <span>{getTotalPrice()} kr</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Frakt</span>
                  <span>Gratis</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                <span>Totalt</span>
                <span>{getTotalPrice()} kr</span>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Gå till kassan
              </Link>

              <Link
                href="/products"
                className="mt-4 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Fortsätt handla
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
