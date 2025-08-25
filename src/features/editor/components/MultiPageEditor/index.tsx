import React, { useEffect, useRef, useState } from "react";
import { EditorContent, Editor } from "@tiptap/react";
import styles from "./MultiPageEditor.module.css";

interface MultiPageEditorProps {
  editor: Editor | null;
  onPageChange?: (pages: number) => void;
}

export const MultiPageEditor: React.FC<MultiPageEditorProps> = ({
  editor,
  onPageChange,
}) => {
  const [pages, setPages] = useState<string[]>([""]);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editor || !editorRef.current) return;

    const updatePages = () => {
      const editorElement = editorRef.current?.querySelector(".ProseMirror");
      if (!editorElement) return;

      const content = editor.getHTML();
      const tempDiv = document.createElement("div");
      tempDiv.style.position = "absolute";
      tempDiv.style.visibility = "hidden";
      tempDiv.style.width = "650px";
      tempDiv.style.fontSize = "12pt";
      tempDiv.style.lineHeight = "1.5";
      tempDiv.style.fontFamily = '"Times New Roman", serif';
      tempDiv.innerHTML = content;
      document.body.appendChild(tempDiv);

      const contentHeight = tempDiv.scrollHeight;
      const pageHeight = 931; 
      const numberOfPages = Math.max(1, Math.ceil(contentHeight / pageHeight));

      document.body.removeChild(tempDiv);

      
      const newPages: string[] = [];
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const elements = Array.from(doc.body.children);

      let currentPageHeight = 0;
      let currentPageContent: Element[] = [];

      elements.forEach((element) => {
        const tempElement = document.createElement("div");
        tempElement.style.position = "absolute";
        tempElement.style.visibility = "hidden";
        tempElement.style.width = "650px";
        tempElement.appendChild(element.cloneNode(true));
        document.body.appendChild(tempElement);

        const elementHeight = tempElement.scrollHeight;
        document.body.removeChild(tempElement);

        if (
          currentPageHeight + elementHeight > pageHeight &&
          currentPageContent.length > 0
        ) {
          
          const pageDiv = document.createElement("div");
          currentPageContent.forEach((el) =>
            pageDiv.appendChild(el.cloneNode(true))
          );
          newPages.push(pageDiv.innerHTML);

          currentPageContent = [element];
          currentPageHeight = elementHeight;
        } else {
          currentPageContent.push(element);
          currentPageHeight += elementHeight;
        }
      });

      
      if (currentPageContent.length > 0) {
        const pageDiv = document.createElement("div");
        currentPageContent.forEach((el) =>
          pageDiv.appendChild(el.cloneNode(true))
        );
        newPages.push(pageDiv.innerHTML);
      }

      
      if (newPages.length === 0) {
        newPages.push("<p></p>");
      }

      setPages(newPages);
      onPageChange?.(newPages.length);
    };

    
    const handleUpdate = () => {
      setTimeout(updatePages, 100); 
    };

    editor.on("update", handleUpdate);
    updatePages(); 

    return () => {
      editor.off("update", handleUpdate);
    };
  }, [editor, onPageChange]);

  if (!editor) return null;

  return (
    <div className={styles.container}>
      <div className={styles.activePage} ref={editorRef}>
        <EditorContent editor={editor} />
      </div>

      {pages.slice(1).map((pageContent, index) => (
        <div
          key={index + 1}
          className={styles.previewPage}
          dangerouslySetInnerHTML={{ __html: pageContent }}
        />
      ))}
    </div>
  );
};

export default MultiPageEditor;
