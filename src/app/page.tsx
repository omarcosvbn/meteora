import Image from "next/image";
import { Carousel } from "./components/Carousel/Carousel";
import styles from "./page.module.scss";
import Product from "./components/Product/Product";
import Category from "./components/Category/Category";

export default function Home() {
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
            />
            <Category
              desktopImage="/Desktop/Categorias/categoria_bolsas.png"
              tabletImage="/Tablet/Categorias/categoria_bolsas.png"
              mobileImage="/Mobile/Categorias/categoria_bolsas.png"
              alt="Bolsas"
              name="Bolsas"
            />
            <Category
              desktopImage="/Desktop/Categorias/categoria_calcados.png"
              tabletImage="/Tablet/Categorias/categoria_calcados.png"
              mobileImage="/Mobile/Categorias/categoria_calcados.png"
              alt="Calçados"
              name="Calçados"
            />
            <Category
              desktopImage="/Desktop/Categorias/categoria_calcas.png"
              tabletImage="/Tablet/Categorias/categoria_calcas.png"
              mobileImage="/Mobile/Categorias/categoria_calcas.png"
              alt="Calças"
              name="Calças"
            />
            <Category
              desktopImage="/Desktop/Categorias/categoria_casacos.png"
              tabletImage="/Tablet/Categorias/categoria_casacos.png"
              mobileImage="/Mobile/Categorias/categoria_casacos.png"
              alt="Casacos"
              name="Casacos"
            />
            <Category
              desktopImage="/Desktop/Categorias/categoria_oculos.png"
              tabletImage="/Tablet/Categorias/categoria_oculos.png"
              mobileImage="/Mobile/Categorias/categoria_oculos.png"
              alt="Óculos"
              name="Óculos"
            />
          </div>
        </div>

        <div className={styles.products__section}>
          <h1 className={styles.title}>Produtos que estão bombando!</h1>
          <div className={styles.products}>
            <Product
              desktopImage="/Desktop/Imagens Cards/Camiseta1.png"
              tabletImage="/Tablet/Imagens Cards/Camiseta1-1.png"
              mobileImage="/Mobile/Imagens Cards/Camiseta1-2.png"
              alt="Camiseta"
              name="Camiseta Conforto"
              description="Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex."
              price="R$ 70,00"
            />
            <Product
              desktopImage="/Desktop/Imagens Cards/Calça1.png"
              tabletImage="/Tablet/Imagens Cards/Calça1-1.png"
              mobileImage="/Mobile/Imagens Cards/Calça1-2.png"
              alt="Calça"
              name="Calça Alfaiataria"
              description="Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!"
              price="R$ 180,00"
            />
            <Product
              desktopImage="/Desktop/Imagens Cards/Tenis1.png"
              tabletImage="/Tablet/Imagens Cards/Tenis1-1.png"
              mobileImage="/Mobile/Imagens Cards/Tenis1-2.png"
              alt="Tênis"
              name="Tênis Chunky"
              description="Snicker casual com solado mais alto e modelagem robusta. Modelo unissex."
              price="R$ 250,00"
            />
            <Product
              desktopImage="/Desktop/Imagens Cards/Jaqueta1.png"
              tabletImage="/Tablet/Imagens Cards/Jaqueta1-1.png"
              mobileImage="/Mobile/Imagens Cards/Jaqueta1-2.png"
              alt="Jaqueta"
              name="Jaqueta Jeans"
              description="Modelo unissex oversized com gola de camurça. Atemporal e autêntica!"
              price="R$ 150,00"
            />
            <Product
              desktopImage="/Desktop/Imagens Cards/Óculos1.png"
              tabletImage="/Tablet/Imagens Cards/Óculos1-1.png"
              mobileImage="/Mobile/Imagens Cards/Óculos1-2.png"
              alt="Óculos"
              name="Óculos Redondo"
              description="Armação metálica em grafite com lentes arredondadas. Sem erro!"
              price="R$ 120,00"
            />
            <Product
              desktopImage="/Desktop/Imagens Cards/Bolsa1.png"
              tabletImage="/Tablet/Imagens Cards/Bolsa1-1.png"
              mobileImage="/Mobile/Imagens Cards/Bolsa1-2.png"
              alt="Bolsa"
              name="Bolsa Coringa"
              description="Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!"
              price="R$ 120,00"
            />
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
          <form className={styles.newsletter__form}>
            <input
              type="email"
              placeholder="Digite seu email"
              className={styles.newsletter__email}
            />
            <input
              type="submit"
              value="Enviar"
              className={styles.newsletter__send}
            />
          </form>
        </div>
      </div>
    </>
  );
}
