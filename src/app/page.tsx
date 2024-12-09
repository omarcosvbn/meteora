import Image from "next/image";
import { Carousel } from "./components/Carousel/Carousel";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className={styles.main__content}>
        <div className={styles.categories}>
          <h1 className={styles.title}>Busque por categoria:</h1>
          <div className={styles.filters}>
            <div className={styles.category}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Categorias/categoria_camisetas.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Categorias/categoria_camisetas.png"
                />
                <Image
                  src="/Desktop/Categorias/categoria_camisetas.png"
                  alt="Categoria camiseta"
                  width={160}
                  height={157}
                  className={styles.category__image}
                />
              </picture>
              <div className={styles.category__name__box}>
                <h2 className={styles.category__name}>Camisetas</h2>
              </div>
            </div>
            <div className={styles.category}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Categorias/categoria_bolsas.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Categorias/categoria_bolsas.png"
                />
                <Image
                  src="/Desktop/Categorias/categoria_bolsas.png"
                  alt="Categoria bolsas"
                  width={160}
                  height={157}
                  className={styles.category__image}
                />
              </picture>
              <div className={styles.category__name__box}>
                <h2 className={styles.category__name}>Bolsas</h2>
              </div>
            </div>
            <div className={styles.category}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Categorias/categoria_calcados.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Categorias/categoria_calcados.png"
                />
                <Image
                  src="/Desktop/Categorias/categoria_calcados.png"
                  alt="Categoria calçados"
                  width={160}
                  height={157}
                  className={styles.category__image}
                />
              </picture>
              <div className={styles.category__name__box}>
                <h2 className={styles.category__name}>Calçados</h2>
              </div>
            </div>
            <div className={styles.category}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Categorias/categoria_calcas.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Categorias/categoria_calcas.png"
                />
                <Image
                  src="/Desktop/Categorias/categoria_calcas.png"
                  alt="Categoria calças"
                  width={160}
                  height={157}
                  className={styles.category__image}
                />
              </picture>
              <div className={styles.category__name__box}>
                <h2 className={styles.category__name}>Calças</h2>
              </div>
            </div>
            <div className={styles.category}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Categorias/categoria_casacos.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Categorias/categoria_casacos.png"
                />
                <Image
                  src="/Desktop/Categorias/categoria_casacos.png"
                  alt="Categoria casacos"
                  width={160}
                  height={157}
                  className={styles.category__image}
                />
              </picture>
              <div className={styles.category__name__box}>
                <h2 className={styles.category__name}>Casacos</h2>
              </div>
            </div>
            <div className={styles.category}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Categorias/categoria_oculos.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Categorias/categoria_oculos.png"
                />
                <Image
                  src="/Desktop/Categorias/categoria_oculos.png"
                  alt="Categoria óculos"
                  width={160}
                  height={157}
                  className={styles.category__image}
                />
              </picture>
              <div className={styles.category__name__box}>
                <h2 className={styles.category__name}>Óculos</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.products__section}>
          <h1 className={styles.title}>Produtos que estão bombando!</h1>
          <div className={styles.products}>
            <div className={styles.product}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Imagens Cards/Camiseta1-2.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Imagens Cards/Camiseta1-1.png"
                />
                <Image
                  src="/Desktop/Imagens Cards/Camiseta1.png"
                  alt="Categoria óculos"
                  width={350}
                  height={422}
                  className={styles.product__image}
                />
              </picture>
              <div className={styles.product__info}>
                <h2 className={styles.product__name}>Camiseta Conforto</h2>
                <p className={styles.product__description}>
                  Multicores e tamanhos. Tecido de algodão 100%, fresquinho para
                  o verão. Modelagem unissex.
                </p>
                <h3 className={styles.product__price}>R$ 70,00</h3>
                <button className={styles.more}>Ver mais</button>
              </div>
            </div>

            <div className={styles.product}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Imagens Cards/Calça1-2.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Imagens Cards/Calça1-1.png"
                />
                <Image
                  src="/Desktop/Imagens Cards/Calça1.png"
                  alt="Categoria óculos"
                  width={350}
                  height={422}
                  className={styles.product__image}
                />
              </picture>
              <div className={styles.product__info}>
                <h2 className={styles.product__name}>Calça Alfaiataria</h2>
                <p className={styles.product__description}>
                  Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!
                </p>
                <h3 className={styles.product__price}>R$ 180,00</h3>
                <button className={styles.more}>Ver mais</button>
              </div>
            </div>

            <div className={styles.product}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Imagens Cards/Tenis1-2.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Imagens Cards/Tenis1-1.png"
                />
                <Image
                  src="/Desktop/Imagens Cards/Tenis1.png"
                  alt="Categoria óculos"
                  width={350}
                  height={422}
                  className={styles.product__image}
                />
              </picture>
              <div className={styles.product__info}>
                <h2 className={styles.product__name}>Tênis Chunky</h2>
                <p className={styles.product__description}>
                  Snicker casual com solado mais alto e modelagem robusta.
                  Modelo unissex.
                </p>
                <h3 className={styles.product__price}>R$ 250,00</h3>
                <button className={styles.more}>Ver mais</button>
              </div>
            </div>

            <div className={styles.product}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Imagens Cards/Jaqueta1-2.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Imagens Cards/Jaqueta1-1.png"
                />
                <Image
                  src="/Desktop/Imagens Cards/Jaqueta1.png"
                  alt="Categoria óculos"
                  width={350}
                  height={422}
                  className={styles.product__image}
                />
              </picture>
              <div className={styles.product__info}>
                <h2 className={styles.product__name}>Jaqueta Jeans</h2>
                <p className={styles.product__description}>
                  Modelo unissex oversized com gola de camurça. Atemporal e
                  autêntica!
                </p>
                <h3 className={styles.product__price}>R$ 150,00</h3>
                <button className={styles.more}>Ver mais</button>
              </div>
            </div>

            <div className={styles.product}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Imagens Cards/Óculos1-2.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Imagens Cards/Óculos1-1.png"
                />
                <Image
                  src="/Desktop/Imagens Cards/Óculos1.png"
                  alt="Categoria óculos"
                  width={350}
                  height={422}
                  className={styles.product__image}
                />
              </picture>
              <div className={styles.product__info}>
                <h2 className={styles.product__name}>Óculos Redondo</h2>
                <p className={styles.product__description}>
                  Armação metálica em grafite com lentes arredondadas. Sem erro!
                </p>
                <h3 className={styles.product__price}>R$ 120,00</h3>
                <button className={styles.more}>Ver mais</button>
              </div>
            </div>

            <div className={styles.product}>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/Mobile/Imagens Cards/Bolsa1-2.png"
                />
                <source
                  media="(max-width: 1440px)"
                  srcSet="/Tablet/Imagens Cards/Bolsa1-1.png"
                />
                <Image
                  src="/Desktop/Imagens Cards/Bolsa1.png"
                  alt="Categoria óculos"
                  width={350}
                  height={422}
                  className={styles.product__image}
                />
              </picture>
              <div className={styles.product__info}>
                <h2 className={styles.product__name}>Bolsa coringa</h2>
                <p className={styles.product__description}>
                  Bolsa camel em couro sintético de alta duração. Ideal para
                  acompanhar você por uma vida!
                </p>
                <h3 className={styles.product__price}>R$ 120,00</h3>
                <button className={styles.more}>Ver mais</button>
              </div>
            </div>
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
            primeira compra? <strong className={styles.newsletter__text__strong}>Cadastre-se!</strong>
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
