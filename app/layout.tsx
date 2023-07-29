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
  hideFooter,
  children,
}: {
  children: React.ReactNode;
  hideFooter?: boolean;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <Theme>
        <body>
          <Header />
          <div className="flex-col mx-auto pb-20 md:pb-10">{children}</div>
          {!hideFooter && <Footer />}
        </body>
      </Theme>
    </html>
  );
}
