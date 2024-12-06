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
                <h3 className={styles.category__name}>Camisetas</h3>
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
                <h3 className={styles.category__name}>Bolsas</h3>
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
                <h3 className={styles.category__name}>Calçados</h3>
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
                <h3 className={styles.category__name}>Calças</h3>
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
                <h3 className={styles.category__name}>Casacos</h3>
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
                <h3 className={styles.category__name}>Óculos</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
