import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header, Theme } from "../components/index";

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
          <div className="flex justify-center mx-auto xl:max-w-[1440px] w-screen">
            <Header />
            <div className="max-w-screen-xl mx-auto">{children}</div>
          </div>
        </body>
      </Theme>
    </html>
  );
}
