export interface DocumentCanvasProps {
  pageCount?: number;
}


import React from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import PageContainer from "../PageContainer";
import { usePagination } from "../../hooks/usePagination";
import styles from "./DocumentCanvas.module.css";

export const DocumentCanvas: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start typing your legal document here…</p>",
  });

  const pages = usePagination(editor);

  return (
    <div className={styles.canvas}>
      {pages.map((slice, i) => (
        <PageContainer
          key={i}
          pageNumber={i + 1}
          editor={editor}
          content={slice.content}
        />
      ))}
    </div>
  );
};

export default DocumentCanvas;
