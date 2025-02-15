import { Poppins } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Christian Hadinata | Web Developer",
  description: "Christian Hadinata personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
        <HeroUIProvider>
          <Navbar />
          {children}
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
