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
  const [productModal, setProductModal] = useState(false);
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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    const filtered = products.filter(
      (product) =>
        (category === "all" || product.category === category) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(lowerCaseQuery)
      )
    );
  }, [searchQuery, products]);

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
                  openModal={() => setProductModal(true)}
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

      <Modal
        title="Confira detalhes sobre o produto"
        openModal={productModal}
        closeModal={() => setProductModal(false)}
      >
        <div className={styles.details}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/Desktop/Imagens Cards/Jaqueta1-2.png"
            />
            <Image
              src="/Desktop/Imagens Cards/Jaqueta1.png"
              alt="Jaqueta"
              width={350}
              height={422}
              className={styles.details__image}
            />
          </picture>

          <div className={styles.details__info}>
            <div className={styles.details__preform}>
              <div className={styles.details__first}>
                <span className={styles.details__first__name}>
                  Jaqueta Jeans
                </span>
                <p className={styles.details__first__description}>
                  Modelo unissex oversized com gola de camurça. Atemporal e
                  autêntica!
                </p>
              </div>
              <div className={styles.details__second}>
                <span className={styles.details__second__price}>R$ 150,00</span>
                <p className={styles.details__second__seller}>
                  Vendido e entregue por Riachuelo
                </p>
              </div>
            </div>

            <form className={styles.details__form}>
              <fieldset className={styles.details__form__field}>
                <h3>Cores:</h3>
                <div className={styles.details__form__field__selector}>
                  <div className={styles.details__form__field__selector__input}>
                    <input
                      type="radio"
                      id="AzulClaro"
                      name="color"
                      value="AzulClaro"
                      className={
                        styles.details__form__field__selector__input__input
                      }
                      defaultChecked
                    />
                    <label htmlFor="AzulClaro">Azul claro</label>
                  </div>
                  <div className={styles.details__form__field__selector__input}>
                    <input
                      type="radio"
                      id="Offwhite"
                      name="color"
                      value="Offwhite"
                      className={
                        styles.details__form__field__selector__input__input
                      }
                    />
                    <label htmlFor="Offwhite">Offwhite</label>
                  </div>
                  <div className={styles.details__form__field__selector__input}>
                    <input
                      type="radio"
                      id="Preto"
                      name="color"
                      value="Preto"
                      className={
                        styles.details__form__field__selector__input__input
                      }
                    />
                    <label htmlFor="Preto">Preto</label>
                  </div>
                </div>
              </fieldset>
              <fieldset className={styles.details__form__field}>
                <h3>Tamanho:</h3>
                <div className={styles.details__form__field__selector}>
                  <div className={styles.details__form__field__selector__input}>
                    <input
                      type="radio"
                      id="P"
                      name="size"
                      value="P"
                      className={
                        styles.details__form__field__selector__input__input
                      }
                      defaultChecked
                    />
                    <label htmlFor="P">P</label>
                  </div>
                  <div className={styles.details__form__field__selector__input}>
                    <input
                      type="radio"
                      id="PP"
                      name="size"
                      value="PP"
                      className={
                        styles.details__form__field__selector__input__input
                      }
                    />
                    <label htmlFor="PP">PP</label>
                  </div>
                  <div className={styles.details__form__field__selector__input}>
                    <input
                      type="radio"
                      id="M"
                      name="size"
                      value="M"
                      className={
                        styles.details__form__field__selector__input__input
                      }
                    />
                    <label htmlFor="M">M</label>
                  </div>
                  <div className={styles.details__form__field__selector__input}>
                    <input
                      type="radio"
                      id="G"
                      name="size"
                      value="G"
                      className={
                        styles.details__form__field__selector__input__input
                      }
                    />
                    <label htmlFor="G">G</label>
                  </div>
                  <div className={styles.details__form__field__selector__input}>
                    <input
                      type="radio"
                      id="GG"
                      name="size"
                      value="GG"
                      className={
                        styles.details__form__field__selector__input__input
                      }
                    />
                    <label htmlFor="GG">GG</label>
                  </div>
                </div>
              </fieldset>
              <button className={styles.details__form__submit} type="submit">
                Adicionar à sacola
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
