'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card',
  });

  useEffect(() => {
    if (cart.length === 0 && !showSuccess) {
      router.push('/cart');
    }
  }, [cart.length, showSuccess, router]);

  if (cart.length === 0 && !showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">Omdirigerar till varukorg...</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulera orderbearbetning
    await new Promise((resolve) => setTimeout(resolve, 2000));

    clearCart();
    setIsProcessing(false);
    setShowSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-8 text-center shadow-md transition-colors">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Tack för din order!</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Din order har mottagits och behandlas nu.
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
              Du kommer att få en bekräftelse via e-post.
            </p>
            <button
              onClick={() => router.push('/products')}
              className="mt-8 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Fortsätt handla
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Kassa</h1>

        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md transition-colors">
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Leveransinformation
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Namn *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    E-post *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Adress *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Stad *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Postnummer *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md transition-colors">
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Betalningsmetod</h2>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="card">Kort</option>
                <option value="swish">Swish</option>
                <option value="invoice">Faktura</option>
              </select>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md transition-colors">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Ordersammanfattning</h2>
              
              <div className="mb-4 space-y-2 border-b border-gray-200 dark:border-gray-700 pb-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      {item.product.name} x {item.quantity}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {item.product.price * item.quantity} kr
                    </span>
                  </div>
                ))}
              </div>

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

              <button
                type="submit"
                disabled={isProcessing}
                className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {isProcessing ? 'Bearbetar...' : 'Slutför köp'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
