// RootLayout.tsx

import React from 'react';
import Navbar from "@/components/shared/Navbar"; // Adjust the import path as necessary
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
    </div>
  );
}

export default RootLayout;
