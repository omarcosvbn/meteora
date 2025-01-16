"use client";

import Image from "next/image";
import { Carousel } from "./components/Carousel/Carousel";
import styles from "./page.module.scss";
import { useSearch } from "./context/SearchContext";
import Product from "./components/Product/Product";
import Category from "./components/Category/Category";
import { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";

type Product = {
  id: number;
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
  alt: string;
  name: string;
  description: string;
  price: string;
  category: string;
};

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3001/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newsletterModal, setNewsletterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { searchQuery } = useSearch();

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterModal(true);
  };

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filterProducts = (category: string, query: string): Product[] => {
    const lowerCaseQuery = query.toLowerCase();
    return products.filter(
      (product) =>
        (category === "all" || product.category === category) &&
        product.name.toLowerCase().includes(lowerCaseQuery)
    );
  };

  useEffect(() => {
    setFilteredProducts(filterProducts(selectedCategory, searchQuery));
  }, [selectedCategory, searchQuery, products]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Carousel />
      <div className={styles.main__content}>
        <div className={styles.categories}>
          <h1 className={styles.title}>Busque por categoria:</h1>
          <div className={styles.filters}>
            <Category
              desktopImage="/Desktop/Categorias/categoria_camisetas.png"
              tabletImage="/Tablet/Categorias/categoria_camisetas.png"
              mobileImage="/Mobile/Categorias/categoria_camisetas.png"
              alt="Camisetas"
              name="Camisetas"
              onClick={() => handleCategoryChange("camisetas")}
            />
            <Category
              desktopImage="/Desktop/Categorias/categoria_bolsas.png"
              tabletImage="/Tablet/Categorias/categoria_bolsas.png"
              mobileImage="/Mobile/Categorias/categoria_bolsas.png"
              alt="Bolsas"
              name="Bolsas"
              onClick={() => handleCategoryChange("bolsas")}
            />
            <Category
              desktopImage="/Desktop/Categorias/categoria_calcados.png"
              tabletImage="/Tablet/Categorias/categoria_calcados.png"
              mobileImage="/Mobile/Categorias/categoria_calcados.png"
              alt="Calçados"
              name="Calçados"
              onClick={() => handleCategoryChange("calcados")}
            />
            <Category
              desktopImage="/Desktop/Categorias/categoria_calcas.png"
              tabletImage="/Tablet/Categorias/categoria_calcas.png"
              mobileImage="/Mobile/Categorias/categoria_calcas.png"
              alt="Calças"
              name="Calças"
              onClick={() => handleCategoryChange("calcas")}
            />
            <Category
              desktopImage="/Desktop/Categorias/categoria_casacos.png"
              tabletImage="/Tablet/Categorias/categoria_casacos.png"
              mobileImage="/Mobile/Categorias/categoria_casacos.png"
              alt="Casacos"
              name="Casacos"
              onClick={() => handleCategoryChange("casacos")}
            />
            <Category
              desktopImage="/Desktop/Categorias/categoria_oculos.png"
              tabletImage="/Tablet/Categorias/categoria_oculos.png"
              mobileImage="/Mobile/Categorias/categoria_oculos.png"
              alt="Óculos"
              name="Óculos"
              onClick={() => handleCategoryChange("oculos")}
            />
          </div>
        </div>

        <div className={styles.products__section}>
          <h1 className={styles.title}>Produtos que estão bombando!</h1>
          <div className={styles.products}>
            {isLoading ? (
              <p>Loading products...</p>
            ) : (
              filteredProducts.map((product) => (
                <Product
                  key={product.id}
                  desktopImage={product.desktopImage}
                  tabletImage={product.tabletImage}
                  mobileImage={product.mobileImage}
                  alt={product.alt}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))
            )}
          </div>
        </div>

        <div className={styles.moreinfo}>
          <h1 className={styles.moreinfo__title}>
            Conheça todas as nossas facilidades
          </h1>
          <div className={styles.moreinfo__infos}>
            <div className={styles.moreinfo__info}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Ícones/x-diamond.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Ícones/x-diamond.png"
                />
                <Image
                  src="/Desktop/Ícones/x-diamond.png"
                  alt="Pix"
                  width={72}
                  height={73}
                  className={styles.moreinfo__image}
                />
              </picture>
              <div className={styles.moreinfo__text}>
                <h3 className={styles.moreinfo__text__title}>PAGUE PELO PIX</h3>
                <p className={styles.moreinfo__text__text}>
                  Ganhe 5% OFF em pagamentos via PIX
                </p>
              </div>
            </div>
            <div className={styles.moreinfo__info}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Ícones/arrow-repeat.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Ícones/arrow-repeat.png"
                />
                <Image
                  src="/Desktop/Ícones/arrow-repeat.png"
                  alt="Troca grátis"
                  width={72}
                  height={73}
                  className={styles.moreinfo__image}
                />
              </picture>
              <div className={styles.moreinfo__text}>
                <h3 className={styles.moreinfo__text__title}>TROCA GRÁTIS</h3>
                <p className={styles.moreinfo__text__text}>
                  Fique livre para trocar em até 30 dias.
                </p>
              </div>
            </div>
            <div className={styles.moreinfo__info}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Ícones/flower.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Ícones/flower.png"
                />
                <Image
                  src="/Desktop/Ícones/flower.png"
                  alt="Sustentabilidade"
                  width={72}
                  height={73}
                  className={styles.moreinfo__image}
                />
              </picture>
              <div className={styles.moreinfo__text}>
                <h3 className={styles.moreinfo__text__title}>
                  SUSTENTABILIDADE
                </h3>
                <p className={styles.moreinfo__text__text}>
                  Moda responsável, que respeita o meio ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.newsletter}>
          <h5 className={styles.newsletter__text}>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na
            primeira compra?{" "}
            <strong className={styles.newsletter__text__strong}>
              Cadastre-se!
            </strong>
          </h5>
          <form
            className={styles.newsletter__form}
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              placeholder="Digite seu email"
              className={styles.newsletter__email}
              required
            />
            <input
              type="submit"
              value="Enviar"
              className={styles.newsletter__send}
            />
          </form>
        </div>
      </div>

      <Modal
        title="E-mail cadastrado com sucesso!"
        openModal={newsletterModal}
        closeModal={() => setNewsletterModal(false)}
      >
        <p>Em breve você receberá novidades exclusivas da Meteora.</p>
      </Modal>
    </>
  );
}
