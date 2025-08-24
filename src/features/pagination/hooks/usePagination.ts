import { useEffect, useState } from "react";
import { Editor } from "@tiptap/react";

const PAGE_HEIGHT = 931; // A4 content height in pixels (1123 - 192 for margins)

export interface PageSlice {
  content: string;
  pageNumber: number;
  overflow: boolean;
}

export function useAutoPagination(editor: Editor | null) {
  const [pages, setPages] = useState<PageSlice[]>([]);

  useEffect(() => {
    if (!editor) return;

    const updatePagination = () => {
      const content = editor.getHTML();

      // First split by manual page breaks
      const manualBreaks = content.split(
        /<div[^>]*data-type="page-break"[^>]*><\/div>/g
      );

      const allPages: PageSlice[] = [];

      manualBreaks.forEach((section, sectionIndex) => {
        if (!section.trim()) return;

        // Check if this section fits in one page
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "absolute";
        tempDiv.style.visibility = "hidden";
        tempDiv.style.width = "650px"; // A4 content width
        tempDiv.style.fontSize = "12pt";
        tempDiv.style.lineHeight = "1.5";
        tempDiv.innerHTML = section;
        document.body.appendChild(tempDiv);

        const sectionHeight = tempDiv.scrollHeight;
        document.body.removeChild(tempDiv);

        if (sectionHeight <= PAGE_HEIGHT) {
          // Fits in one page
          allPages.push({
            content: section,
            pageNumber: allPages.length + 1,
            overflow: false,
          });
        } else {
          // Need to split this section
          allPages.push({
            content: section,
            pageNumber: allPages.length + 1,
            overflow: true,
          });

          // Add overflow pages (simplified)
          const overflowPages = Math.ceil(sectionHeight / PAGE_HEIGHT) - 1;
          for (let i = 0; i < overflowPages; i++) {
            allPages.push({
              content: "<p>[Continued from previous page...]</p>",
              pageNumber: allPages.length + 1,
              overflow: false,
            });
          }
        }
      });

      // Ensure at least one page
      if (allPages.length === 0) {
        allPages.push({
          content: "<p></p>",
          pageNumber: 1,
          overflow: false,
        });
      }

      setPages(allPages);
    };

    // Update on content change
    editor.on("update", updatePagination);
    updatePagination();

    return () => {
      editor.off("update", updatePagination);
    };
  }, [editor]);

  return pages;
}
