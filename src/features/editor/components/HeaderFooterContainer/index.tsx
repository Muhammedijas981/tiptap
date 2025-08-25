import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styles from "./HeaderFooterContainer.module.css";

interface HeaderFooterContainerProps {
  pageNumber: number;
  totalPages: number;
  showHeaderFooter: boolean;
  onHeaderChange?: (content: string) => void;
  onFooterChange?: (content: string) => void;
}

export const HeaderFooterContainer: React.FC<HeaderFooterContainerProps> = ({
  pageNumber,
  totalPages,
  showHeaderFooter,
  onHeaderChange,
  onFooterChange,
}) => {
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [isEditingFooter, setIsEditingFooter] = useState(false);

  const headerEditor = useEditor({
    extensions: [StarterKit],
    content: `<p>Document Header - Page ${pageNumber}</p>`,
    onUpdate: ({ editor }) => {
      onHeaderChange?.(editor.getHTML());
    },
  });

  const footerEditor = useEditor({
    extensions: [StarterKit],
    content: `<p>Page ${pageNumber} of ${totalPages}</p>`,
    onUpdate: ({ editor }) => {
      onFooterChange?.(editor.getHTML());
    },
  });

  if (!showHeaderFooter) return null;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.header} ${isEditingHeader ? styles.editing : ""}`}
        onClick={() => setIsEditingHeader(true)}
        onBlur={() => setIsEditingHeader(false)}
      >
        {headerEditor && (
          <EditorContent
            editor={headerEditor}
            className={styles.editorContent}
          />
        )}
        {!isEditingHeader && (
          <div className={styles.placeholder}>Click to edit header</div>
        )}
      </div>
      <div
        className={`${styles.footer} ${isEditingFooter ? styles.editing : ""}`}
        onClick={() => setIsEditingFooter(true)}
        onBlur={() => setIsEditingFooter(false)}
      >
        {footerEditor && (
          <EditorContent
            editor={footerEditor}
            className={styles.editorContent}
          />
        )}
        {!isEditingFooter && (
          <div className={styles.placeholder}>Click to edit footer</div>
        )}
      </div>
    </div>
  );
};

export default HeaderFooterContainer;
