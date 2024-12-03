import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.scss";
import styles from "./styles/Header.module.scss";

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
        <header className={styles.header}>
          <div className={styles.first__section}>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/Tablet/Logo_tablet.png"
              />
              <source
                media="(max-width: 375px)"
                srcSet="/Mobile/Logo_mobile.png"
              />
              <img
                src="/Desktop/Logo_desktop.png"
                alt="alt text here"
                width={133}
                height={32}
                className={styles.logo}
              />
            </picture>
            <nav className={styles.menu}>
              <div className={styles.pages}>
                <a className={styles.a} href="#">
                  Home
                </a>
                <a className={styles.a} href="#">
                  Nossas lojas
                </a>
                <a className={styles.a} href="#">
                  Novidades
                </a>
                <a className={styles.a} href="#">
                  Promoções
                </a>
              </div>
            </nav>
          </div>

          <form className={styles.second__section}>
            <input type="text" placeholder="Digite o produto" className={styles.search}/>
            <input type="submit" value="Buscar" className={styles.search__apply}/>
          </form>
          <button className={styles.hamburguer}></button>
        </header>

        {children}
      </body>
    </html>
  );
}
