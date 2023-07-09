import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Richard Digital Portfolio",
  description: "Software Engineer digital portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
