import Image from "next/image";
import Modal from "../Modal/Modal";
import styles from "./Details.module.scss";

interface DetailsProps {
  productModal: boolean;
  setProductModal: (state: boolean) => void;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  name: string;
  description: string;
  price: string;
}

export default function Details(props: DetailsProps) {
  return (
    <Modal
      title="Confira detalhes sobre o produto"
      openModal={props.productModal}
      closeModal={() => props.setProductModal(false)}
    >
      <div className={styles.details}>
        <picture>
          <source media="(max-width: 768px)" srcSet={props.mobileImage} />
          <Image
            src={props.desktopImage}
            alt={props.alt}
            width={350}
            height={422}
            className={styles.details__image}
          />
        </picture>

        <div className={styles.details__info}>
          <div className={styles.details__preform}>
            <div className={styles.details__first}>
              <span className={styles.details__first__name}>{props.name}</span>
              <p className={styles.details__first__description}>
                {props.description}
              </p>
            </div>
            <div className={styles.details__second}>
              <span className={styles.details__second__price}>
                {props.price}
              </span>
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
  );
}
