import React, { useState } from "react";
import { Send, ChevronRight } from "lucide-react";
import styles from "./PageThumbnails.module.css";

export const PageThumbnails = ({
  totalPages = 3,
  currentPage = 1,
  // onSelectPage,
}) => {
  const [activeTab, setActiveTab] = useState("Thumbnail");
  const [chatInput, setChatInput] = useState("");

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.sidebar}>
      {/* Header Tabs */}
      <div className={styles.header}>
        <div className={styles.tabs}>
          {["Thumbnail", "Index", "Search"].map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${
                activeTab === tab ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <button className={styles.expandButton}>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className={styles.content}>
        {activeTab === "Thumbnail" && (
          <div className={styles.thumbnailList}>
            {pages.map((pageNum) => (
              <div
                key={pageNum}
                className={`${styles.thumbnailItem} ${
                  pageNum === currentPage ? styles.activePage : ""
                }`}
                // onClick={() => onSelectPage && onSelectPage(pageNum)}
              >
                {/* PDF Thumbnail */}
                <div className={styles.pdfThumbnail}>
                  {/* Page indicators at top */}
                  <div className={styles.pageIndicators}>
                    <div className={styles.pageIndicator}></div>
                    <div className={styles.pageIndicator}></div>
                    <div className={styles.pageIndicator}></div>
                    <div className={styles.pageIndicator}></div>
                  </div>

                  {/* PDF Header */}
                  <div className={styles.pdfHeader}>PDF</div>

                  {/* PDF Content */}
                  <div className={styles.pdfContent}>
                    <div className={styles.pdfText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>

                    <div className={styles.bulletList}>
                      <div className={styles.bulletItem}>
                        • Lorem ipsum dolor sit amet
                      </div>
                      <div className={styles.bulletItem}>
                        • Lorem ipsum dolor sit amet
                      </div>
                      <div className={styles.bulletItem}>
                        • Lorem ipsum dolor sit amet
                      </div>
                    </div>

                    <div className={styles.pdfText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Index" && (
          <div className={styles.indexContent}>
            <p className={styles.emptyMessage}>No index items available</p>
          </div>
        )}

        {activeTab === "Search" && (
          <div className={styles.searchContent}>
            <input
              type="text"
              placeholder="Search document..."
              className={styles.searchInput}
            />
          </div>
        )}
      </div>

      {/* Chat Input Section */}
      <div className={styles.chatSection}>
        <div className={styles.chatInputContainer}>
          <input
            type="text"
            placeholder="Ask Vettam"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            className={styles.chatInput}
          />
          <button className={styles.sendButton}>
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageThumbnails;
