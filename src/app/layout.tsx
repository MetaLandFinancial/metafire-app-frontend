// RootLayout.tsx

import React from 'react';
import Navbar from "@/components/shared/Navbar"; // Adjust the import path as necessary
import Footer from '@/components/shared/Footer';
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { metadata } from "@/app/metadata";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
