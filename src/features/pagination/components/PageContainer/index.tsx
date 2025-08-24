import React, { useRef, useEffect } from "react";
import { EditorContent, Editor } from "@tiptap/react";
import styles from "./PageContainer.module.css";

export interface PageContainerProps {
  pageNumber: number;
  editor: Editor | null;
  content: string;
  isActive?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  pageNumber,
  editor,
  content,
  isActive = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`${styles.page} ${isActive ? styles.activePage : ""}`}
    >
      <div className={styles.content}>
        {editor && isActive ? (
          <EditorContent editor={editor} />
        ) : (
          <div
            className={styles.pagePreview}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
      <div className={styles.footer}>Page {pageNumber}</div>
    </div>
  );
};

export default PageContainer;
