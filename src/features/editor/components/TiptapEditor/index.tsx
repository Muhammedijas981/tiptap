import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styles from "./TiptapEditor.module.css";

export const TiptapEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello, Vettam AI Editor!</p>",
  });

  return (
    <div className={styles.editorWrapper}>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
