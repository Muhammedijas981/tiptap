import React from "react";
import { Editor } from "@tiptap/react";
import { Button } from "@/components/ui";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Scissors,
} from "lucide-react";
import styles from "./Toolbar.module.css";

export type EditorMode = "text" | "page";

interface ToolbarProps {
  editor: Editor | null;
  mode: EditorMode;
  onModeChange: (mode: EditorMode) => void;
  showRuler: boolean;
  onRulerToggle: () => void;
  showHeaderFooter: boolean;
  onHeaderFooterToggle: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  editor,
  mode,
  onModeChange,
  showRuler,
  onRulerToggle,
  showHeaderFooter,
  onHeaderFooterToggle,
}) => {
  return (
    <div className={styles.toolbarContainer}>
      {/* Main Mode Toggle */}
      <div className={styles.mainToolbar}>
        <div className={styles.modeToggle}>
          <Button
            variant={mode === "text" ? "primary" : "secondary"}
            size="sm"
            onClick={() => onModeChange("text")}
          >
            Text
          </Button>
          <Button
            variant={mode === "page" ? "primary" : "secondary"}
            size="sm"
            onClick={() => onModeChange("page")}
          >
            Page
          </Button>
        </div>

        {/* Page Mode Controls */}
        {mode === "page" && (
          <div className={styles.pageControls}>
            <Button
              variant={showHeaderFooter ? "primary" : "secondary"}
              size="sm"
              onClick={onHeaderFooterToggle}
            >
              Header & Footer
            </Button>
            <Button variant="secondary" size="sm">
              Margin
            </Button>
            <Button
              variant={showRuler ? "primary" : "secondary"}
              size="sm"
              onClick={onRulerToggle}
            >
              Rulers
            </Button>
            <Button variant="secondary" size="sm">
              Watermark
            </Button>
            <Button variant="secondary" size="sm">
              Zoom
            </Button>
            <Button variant="secondary" size="sm">
              Fill
            </Button>
            <Button variant="secondary" size="sm">
              Character count
            </Button>
            {/* NEW: Page Break Button */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => editor?.commands.insertPageBreak()}
              disabled={!editor}
              title="Insert Page Break (Ctrl+Enter)"
            >
              <Scissors size={16} />
              Page Break
            </Button>
          </div>
        )}
      </div>

      {/* Formatting Toolbar */}
      <div className={styles.formattingToolbar}>
        {/* Font Controls */}
        <div className={styles.group}>
          <select className={styles.fontSelect}>
            <option>Avenir Next</option>
            <option>Arial</option>
            <option>Times New Roman</option>
          </select>
          <select className={styles.sizeSelect}>
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
          </select>
        </div>

        {/* Text Formatting */}
        {editor && (
          <>
            <div className={styles.group}>
              <Button
                variant={editor.isActive("bold") ? "primary" : "secondary"}
                size="sm"
                onClick={() => editor.chain().focus().toggleBold().run()}
              >
                <Bold size={16} />
              </Button>
              <Button
                variant={editor.isActive("italic") ? "primary" : "secondary"}
                size="sm"
                onClick={() => editor.chain().focus().toggleItalic().run()}
              >
                <Italic size={16} />
              </Button>
              <Button
                variant={editor.isActive("underline") ? "primary" : "secondary"}
                size="sm"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
              >
                <Underline size={16} />
              </Button>
            </div>

            {/* Lists */}
            <div className={styles.group}>
              <Button
                variant={
                  editor.isActive("bulletList") ? "primary" : "secondary"
                }
                size="sm"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
              >
                <List size={16} />
              </Button>
              <Button
                variant={
                  editor.isActive("orderedList") ? "primary" : "secondary"
                }
                size="sm"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
              >
                <ListOrdered size={16} />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
