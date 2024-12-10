import Image from "next/image";
import styles from "./Product.module.scss";

interface Product {
    desktopImage: string,
    tabletImage: string,
    mobileImage: string,
    alt: string,
    name: string,
    description: string,
    price: string
  }

export default function Product(props: Product) {
  return (
    <div className={styles.product}>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={props.mobileImage}
        />
        <source
          media="(max-width: 1440px)"
          srcSet={props.tabletImage}
        />
        <Image
          src={props.desktopImage}
          alt={props.alt}
          width={350}
          height={422}
          className={styles.product__image}
        />
      </picture>
      <div className={styles.product__info}>
        <h2 className={styles.product__name}>{props.name}</h2>
        <p className={styles.product__description}>
          {props.description}
        </p>
        <h3 className={styles.product__price}>{props.price}</h3>
        <button className={styles.more}>Ver mais</button>
      </div>
    </div>
  );
}
