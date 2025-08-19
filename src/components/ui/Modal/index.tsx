import React from "react";
import classNames from "clsx";
import styles from "./Modal.module.css";
import { ModalProps } from "./Modal.types";

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  size = "md",
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={classNames(styles.modal, styles[size])}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <h2>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};
