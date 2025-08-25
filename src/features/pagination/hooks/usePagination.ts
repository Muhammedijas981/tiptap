import { useEffect, useState } from "react";
import { Editor } from "@tiptap/react";

const PAGE_HEIGHT = 931; 

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

      
      const manualBreaks = content.split(
        /<div[^>]*data-type="page-break"[^>]*><\/div>/g
      );

      const allPages: PageSlice[] = [];

      manualBreaks.forEach((section, sectionIndex) => {
        if (!section.trim()) return;

        
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "absolute";
        tempDiv.style.visibility = "hidden";
        tempDiv.style.width = "650px"; 
        tempDiv.style.fontSize = "12pt";
        tempDiv.style.lineHeight = "1.5";
        tempDiv.innerHTML = section;
        document.body.appendChild(tempDiv);

        const sectionHeight = tempDiv.scrollHeight;
        document.body.removeChild(tempDiv);

        if (sectionHeight <= PAGE_HEIGHT) {
          
          allPages.push({
            content: section,
            pageNumber: allPages.length + 1,
            overflow: false,
          });
        } else {
          
          allPages.push({
            content: section,
            pageNumber: allPages.length + 1,
            overflow: true,
          });

          
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

      
      if (allPages.length === 0) {
        allPages.push({
          content: "<p></p>",
          pageNumber: 1,
          overflow: false,
        });
      }

      setPages(allPages);
    };

    
    editor.on("update", updatePagination);
    updatePagination();

    return () => {
      editor.off("update", updatePagination);
    };
  }, [editor]);

  return pages;
}
