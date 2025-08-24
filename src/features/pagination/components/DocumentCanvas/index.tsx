import React, { useCallback } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PageBreakExtension } from "@/features/editor/extensions";
import { AutoPaginationExtension } from "@/features/editor/extensions/AutoPaginationExtension";
import MultiPageEditor from "@/features/editor/components/MultiPageEditor";
import { useEditorStore } from "@/lib/zustand/store";
import styles from "./DocumentCanvas.module.css";

export const DocumentCanvas: React.FC = () => {
  const { setTotalPages } = useEditorStore();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable default paragraph spacing
        paragraph: {
          HTMLAttributes: {
            style: "margin: 0 0 12px 0;",
          },
        },
      }),
      PageBreakExtension,
      AutoPaginationExtension,
    ],
    content: `
      <p>Start typing your legal document here…</p>
      <p>This is a demonstration of automatic pagination in a legal document editor. When you type enough content to fill a page, it will automatically flow to the next page.</p>
      <p>Press Ctrl+Enter to insert a manual page break at any time.</p>
      <p>Try typing several paragraphs to see the automatic page overflow in action.</p>
    `,
    editorProps: {
      attributes: {
        style: "height: 931px; overflow: hidden;", // Exact page content height
      },
    },
  });

  const handlePageChange = useCallback(
    (pageCount: number) => {
      setTotalPages(pageCount);
    },
    [setTotalPages]
  );

  return (
    <div className={styles.canvas}>
      <MultiPageEditor editor={editor} onPageChange={handlePageChange} />
    </div>
  );
};

export default DocumentCanvas;
