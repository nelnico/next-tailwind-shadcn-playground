import "./globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import SideNav from "@/components/nav/side-nav";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import Header from "@/components/nav/header";
import HeaderMobile from "@/components/nav/header-mobile";
import PageWrapper from "@/components/page-wrapper";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
