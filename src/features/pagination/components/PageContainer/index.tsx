import React, { useRef, useEffect } from "react";
import { EditorContent, Editor } from "@tiptap/react";
import HeaderFooterContainer from "../../../editor/components/HeaderFooterContainer";
import { useEditorStore } from "@/lib/zustand/store";
import styles from "./PageContainer.module.css";

export interface PageContainerProps {
  pageNumber: number;
  editor: Editor | null;
  content: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  pageNumber,
  editor,
  content,
  isActive = false,
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { showHeaderFooter, totalPages } = useEditorStore();

  
  useEffect(() => {
    if (isActive && editor) {
      setTimeout(() => {
        editor.commands.focus();
      }, 100);
    }
  }, [isActive, editor]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.page} ${isActive ? styles.activePage : ""}`}
      onClick={handleClick}
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

      {}
      {!showHeaderFooter && (
        <div className={styles.defaultFooter}>Page {pageNumber}</div>
      )}

      {}
      <HeaderFooterContainer
        pageNumber={pageNumber}
        totalPages={totalPages}
        showHeaderFooter={showHeaderFooter}
      />
    </div>
  );
};

export default PageContainer;
