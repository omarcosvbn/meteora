"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import styles from "./Carousel.module.scss";

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSlidesCount(emblaApi.slideNodes().length); // Set total slides count
    emblaApi.on("select", onSelect); // Listen for slide changes
    onSelect(); // Initialize current slide
  }, [emblaApi, onSelect]);



  return (
    <section className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/Mobile/Banner_carousel_1_375.png"
            />
            <source
              media="(max-width: 1440px)"
              srcSet="/Tablet/Banner_carousel_1_768.png"
            />
            <Image
              src="/Desktop/Banner_carousel_1_1440.png"
              alt="Banner"
              width={1440}
              height={415}
              className={styles.banner}
            />
          </picture>
        </div>
        <div className={styles.embla__slide}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/Mobile/Banner_carousel_2_375.png"
            />
            <source
              media="(max-width: 1440px)"
              srcSet="/Tablet/Banner_carousel_2_768.png"
            />
            <Image
              src="/Desktop/Banner_carousel_2_1440.png"
              alt="Banner"
              width={1440}
              height={415}
              className={styles.banner}
            />
          </picture>
        </div>
        <div className={styles.embla__slide}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/Mobile/Banner_carousel_3_375.png"
            />
            <source
              media="(max-width: 1440px)"
              srcSet="/Tablet/Banner_carousel_3_768.png"
            />
            <Image
              src="/Desktop/Banner_carousel_3_1440.png"
              alt="Banner"
              width={1440}
              height={415}
              className={styles.banner}
            />
          </picture>
        </div>
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrow} onClick={scrollPrev}>
          <Image
            src="/Desktop/Ícones/arrow_left.png"
            alt="Previous"
            width={14}
            height={18}
          />
        </button>
        <button className={styles.arrow} onClick={scrollNext}>
          <Image
            src="/Desktop/Ícones/arrow_right.png"
            alt="Next"
            width={14}
            height={18}
          />
        </button>
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: slidesCount }).map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === selectedIndex ? styles.active : ""
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
