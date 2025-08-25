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

  // Monitor content height and prevent overflow
  useEffect(() => {
    if (!editor || !isActive) return;

    const handleUpdate = () => {
      const proseMirrorElement =
        containerRef.current?.querySelector(".ProseMirror");
      if (!proseMirrorElement) return;

      const contentHeight = proseMirrorElement.scrollHeight;
      const maxHeight = 931; // A4 content height

      if (contentHeight > maxHeight) {
        // Content is overflowing - in a real implementation,
        // this would trigger moving content to next page
        console.log("Content overflow detected - would move to next page");
      }
    };

    editor.on("update", handleUpdate);

    return () => {
      editor.off("update", handleUpdate);
    };
  }, [editor, isActive]);

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
