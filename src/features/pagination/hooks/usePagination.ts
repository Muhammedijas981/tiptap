import { Editor } from "@tiptap/react";
import { useEffect, useState } from "react";
import { A4_DIMENSIONS, CONTENT_AREA } from "@/constants/dimensions";

export interface PageSlice {
  start: number;
  end: number;
  content: string;
}

export function usePagination(editor: Editor | null) {
  const [pages, setPages] = useState<PageSlice[]>([]);

  useEffect(() => {
    if (!editor) return;

    const updatePagination = () => {
      const doc = editor.state.doc.toString();
      const { WIDTH, HEIGHT } = A4_DIMENSIONS;
      const maxHeight = CONTENT_AREA.HEIGHT;

      // Temporary hidden container for measuring
      const container = document.createElement("div");
      container.style.visibility = "hidden";
      container.style.position = "absolute";
      container.style.width = `${WIDTH}px`;
      container.style.padding = `0 ${A4_DIMENSIONS.MARGINS.LEFT}px`;
      container.innerHTML = editor.getHTML();
      document.body.appendChild(container);

      const slices: PageSlice[] = [];
      let start = 0;
      let end = 0;

      while (start < doc.length) {
        // Expand end until content fits maxHeight
        end = doc.length;
        let low = start,
          high = doc.length;

        while (low < high) {
          const mid = Math.ceil((low + high) / 2);
          container.innerHTML = doc.slice(start, mid);
          const height = container.scrollHeight;

          if (height > maxHeight) {
            high = mid - 1;
          } else {
            low = mid;
          }
        }

        end = low;
        slices.push({ start, end, content: doc.slice(start, end) });
        start = end;
      }

      document.body.removeChild(container);
      setPages(slices);
    };

    editor.on("update", updatePagination);
    updatePagination();

    return () => {
      editor.off("update", updatePagination);
    };
  }, [editor]);

  return pages;
}
