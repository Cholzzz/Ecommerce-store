import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ShopHub - Modern E-handel",
  description: "Din go-to butik för kvalitetsprodukter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <ThemeProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}