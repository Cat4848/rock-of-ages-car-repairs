import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "../components/navbar/NavBar";
import Footer from "@/components/Footer";
import Trim from "@/components/Trim";
import color from "@/lib/color";
import { footerText, footerHeight, footerLogo } from "@/lib/footer";
import { navbarBottomTrimHeight } from "@/lib/navbar";
import StructuredData from "@/components/StructuredData";
import { organization } from "@/lib/structuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mobile Mechanic Kent",
  description: "Mobile Mechanic in Kent and Medway"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <StructuredData data={organization} />
      </head>
      <body className={inter.className}>
        <nav>
          <NavBar>
            <Trim color={color.gold} height={navbarBottomTrimHeight} />
          </NavBar>
        </nav>
        <main>{children}</main>
        <Footer
          height={footerHeight}
          backgroundColor={color.black}
          textColor={color.silver}
          text={footerText}
          logo={footerLogo}
        />
      </body>
    </html>
  );
}
