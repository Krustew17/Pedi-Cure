import { Montserrat } from "next/font/google";
import "./globals.css";

import PromoBanner from "@/components/PromoBanner/promoBanner";
import Header from "@/components/Header/header";
import BackToTop from "@/components/BackToTop/backToTop";
import Footer from "@/components/Footer/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <PromoBanner />
        <Header />
        <BackToTop />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
