import React, { useEffect } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PageBreakExtension } from "@/features/editor/extensions";
import PageContainer from "../PageContainer";
import { useEditorStore } from "@/lib/zustand/store";
import styles from "./DocumentCanvas.module.css";


interface DocumentCanvasProps {
  onEditorReady?: (editor: any) => void;
}

export const DocumentCanvas: React.FC<DocumentCanvasProps> = ({
  onEditorReady,
}) => {
  const { setTotalPages } = useEditorStore();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            style: "margin: 0 0 12px 0;",
          },
        },
      }),
      PageBreakExtension,
    ],
    content: `
      <p>Start typing your legal document here…</p>
      <p>This is a demonstration of automatic pagination in a legal document editor.</p>
      <p>Press Ctrl+Enter to insert a manual page break at any time.</p>
      <p>Try typing enough content to see how scrolling is prevented within pages.</p>
    `,
  });

  
  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  
  useEffect(() => {
    setTotalPages(3);
  }, [setTotalPages]);

  return (
    <div className={styles.canvas}>
      <PageContainer
        pageNumber={1}
        editor={editor}
        content=""
        isActive={true}
      />

      <PageContainer
        pageNumber={2}
        editor={null}
        content="<p>Page 2 content will appear here when content overflows from Page 1...</p>"
        isActive={false}
      />

      <PageContainer
        pageNumber={3}
        editor={null}
        content="<p>Page 3 content will appear here...</p>"
        isActive={false}
      />
    </div>
  );
};

export default DocumentCanvas;
