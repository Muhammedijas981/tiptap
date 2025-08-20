import React from "react";
import styles from "./PageThumbnails.module.css";
import { PageThumbnailsProps } from "./PageThumbnails.types";

export const PageThumbnails: React.FC<PageThumbnailsProps> = ({
  totalPages,
  currentPage,
  onSelectPage,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.sidebar}>
      {pages.map((num) => (
        <div
          key={num}
          className={`${styles.thumb} ${
            num === currentPage ? styles.active : ""
          }`}
          onClick={() => onSelectPage(num)}
        >
          Page {num}
        </div>
      ))}
    </div>
  );
};

export default PageThumbnails;
