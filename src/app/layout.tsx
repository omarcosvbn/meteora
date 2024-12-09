import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
});

export const metadata: Metadata = {
  title: "Meteora",
  description:
    "Estilo e conforto para todas as ocasiões. Encontre peças que combinam com você na Meteora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
