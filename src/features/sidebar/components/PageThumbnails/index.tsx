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
      {/* Sidebar Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>Thumbnail</h3>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Index"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>

      {/* Page Thumbnails */}
      <div className={styles.thumbnailContainer}>
        {pages.map((num) => (
          <div
            key={num}
            className={`${styles.thumbnail} ${
              num === currentPage ? styles.active : ""
            }`}
            onClick={() => onSelectPage(num)}
          >
            {/* Thumbnail Preview */}
            <div className={styles.pagePreview}>
              <div className={styles.pageContent}>
                {/* Simulate page content lines */}
                <div className={styles.contentLine}></div>
                <div className={styles.contentLine}></div>
                <div className={styles.contentLine}></div>
                <div className={styles.contentLine}></div>
                <div className={styles.contentLine}></div>
              </div>
            </div>

            {/* Page Number */}
            <div className={styles.pageNumber}>{num}</div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </div>
  );
};

export default PageThumbnails;
