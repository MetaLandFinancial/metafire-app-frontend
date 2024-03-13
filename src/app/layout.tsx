import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { metadata } from "@/app/metadata";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Set the title and description in metadata.tsx file. */}
        <title>{`${metadata.title}`}</title>
        <meta name="description" content={`${metadata.description}`} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
