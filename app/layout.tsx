import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer, Header, Theme } from "./components/index";

const inter = Montserrat({ subsets: ["latin"] });

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
    <html lang="en" className={`${inter.className}`}>
      <Theme>
        <body>
          <Header />
          <div className="flex-col mx-auto overflow-auto">{children}</div>
          <Footer />
        </body>
      </Theme>
    </html>
  );
}
