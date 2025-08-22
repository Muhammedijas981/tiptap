// src/features/pagination/components/PageContainer/index.tsx
import React from "react";
import { EditorContent, Editor } from "@tiptap/react";
import styles from "./PageContainer.module.css";

export interface PageContainerProps {
  pageNumber: number;
  editor: Editor | null;
  content: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  pageNumber,
  editor,
  content,
}) => {
  // Render only this slice
  if (editor) {
    editor.commands.setContent(content, { emitUpdate: false });
  }

  return (
    <div className={styles.page}>
      {editor && (
        <div className={styles.content}>
          <EditorContent editor={editor} />
        </div>
      )}
      <div className={styles.footer}>Page {pageNumber}</div>
    </div>
  );
};

export default PageContainer;
