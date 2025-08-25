import React from "react";
import { NodeViewWrapper } from "@tiptap/react";
import styles from "./PageBreakView.module.css";

export const PageBreakView: React.FC = () => {
  return (
    <NodeViewWrapper className={styles.pageBreak}>
      <div className={styles.line}>
        <span className={styles.label}>Manual Page Break</span>
      </div>
    </NodeViewWrapper>
  );
};

export default PageBreakView;
