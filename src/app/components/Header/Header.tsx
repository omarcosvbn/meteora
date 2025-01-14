"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearch } from "../../context/SearchContext";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSearchQuery } = useSearch();
  const [inputValue, setInputValue] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <header className={styles.header}>
      <div className={styles.first__section}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/Mobile/Logo_mobile.png" />
          <source
            media="(max-width: 1440px)"
            srcSet="/Tablet/Logo_tablet.png"
          />
          <Image
            src="/Desktop/Logo_desktop.png"
            alt="Logo"
            width={133}
            height={32}
            className={styles.logo}
          />
        </picture>
        <nav
          className={`${styles.menu} ${
            isMenuOpen ? styles.menu__open : styles.menu__closed
          }`}
        >
          <a className={`${styles.a} ${styles.divider}`} href="#">
            Home
          </a>
          <a className={`${styles.a} ${styles.divider}`} href="#">
            Nossas lojas
          </a>
          <a className={`${styles.a} ${styles.divider}`} href="#">
            Novidades
          </a>
          <a className={styles.a} href="#">
            Promoções
          </a>
        </nav>
        <button className={styles.hamburguer} onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src="/Mobile/Ícones/close.png" />
          ) : (
            <img src="/Mobile/Ícones/open.png" />
          )}
        </button>
      </div>

      <form className={styles.second__section} onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Digite o produto"
          className={styles.search}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" value="Buscar" className={styles.search__apply} />
      </form>
    </header>
  );
}
