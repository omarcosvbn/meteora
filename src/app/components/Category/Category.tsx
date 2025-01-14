import Image from "next/image";
import styles from "./Category.module.scss";

interface Category{
desktopImage: string,
tabletImage: string,
mobileImage: string,
alt: string,
name: string,
onClick: () => void
}

export default function Category(props: Category) {
  return (
    <div className={styles.category} onClick={props.onClick}>
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
          width={160}
          height={157}
          className={styles.category__image}
        />
      </picture>
      <div className={styles.category__name}>
        <h2 className={styles.category__name__text}>{props.name}</h2>
      </div>
    </div>
  );
}
