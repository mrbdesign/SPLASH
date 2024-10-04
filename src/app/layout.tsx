import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import SocialIcons from './components/SocialIcons';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PIXEL WORLD",
  description: "by Mr.Brian Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <ThirdwebProvider>{children}</ThirdwebProvider>
        <SocialIcons /> {/* Place the SocialIcons here */}
        <Footer />
      </body>
    </html>
  );
}
