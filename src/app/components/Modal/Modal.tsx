"use client";

import Image from "next/image";
import styles from "./Modal.module.scss";
import { useEffect, useRef } from "react";

interface ProductModalProps {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  title: string;
}

export default function Modal(props: ProductModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (props.openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [props.openModal]);

  return (
    <dialog className={styles.dialog} ref={ref} onCancel={props.closeModal}>
      <div className={styles.header}>
        <div className={styles.firstsection}>
          <Image
            src="/Mobile/Ícones/check.png"
            alt="Check icon"
            width="32"
            height="32"
          />
          <p className={styles.title}>{props.title}</p>
        </div>
        <button className={styles.button} onClick={props.closeModal}>
          <Image
            src="/Mobile/Ícones/modalClose.png"
            alt="Close button"
            width="16"
            height="16"
          />
        </button>
      </div>
      <div className={styles.content}>{props.children}</div>
    </dialog>
  );
}
