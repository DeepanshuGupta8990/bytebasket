import type { Metadata } from "next";
import { Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteBasket Cakes | Delicious Cakes, Burgers & More",
  description: "Experience the best food in Jaipur, Sanganer, and Pratap Nagar. Order cakes, burgers, pizzas, sandwiches, shakes, and cold coffee online from ByteBasket Cakes.",
  keywords: ["cakes", "burgers", "pizzas", "sandwiches", "shakes", "cold coffee", "Jaipur", "Sanganer", "Pratap Nagar", "ByteBasket Cakes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
