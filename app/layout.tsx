import type { Metadata } from "next";
import {Bodoni_Moda, Outfit, Inter } from 'next/font/google';
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import CartDrawer from "@/components/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600', '800', '900'],
  variable: '--font-outfit',
});

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-bodoni',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'TheHemmes | Timeless Luxury',
  description: 'High-end classic fashion for the modern individual.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          href="/herobg9.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className="bg-cloud-dancer text-hemmes-dark font-sans">
        <StoreProvider>
          {children}
          <WishlistDrawer />
          <CartDrawer /> {/* This lives globally and listens for the isCartOpen state */}
        </StoreProvider>
      </body>
      
    </html>
  );
}
