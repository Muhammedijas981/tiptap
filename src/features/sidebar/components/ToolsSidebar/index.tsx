import React from "react";
import styles from "./ToolsSidebar.module.css";
import { Inbox, Book, Globe, Pen, Bookmark } from "lucide-react";

export const ToolsSidebar: React.FC = () => (
  <div className={styles.container}>
    <h2 className={styles.logo}>Vettam.AI</h2>
    <button className={styles.newChat}>New Chat</button>
    <nav className={styles.nav}>
      <div className={styles.sectionTitle}>Features</div>
      <a href="#" className={styles.link}>
        <Inbox size={16} /> Workspace
      </a>
      <a href="#" className={styles.link}>
        <Book size={16} /> Research
      </a>
      <a href="#" className={styles.link}>
        <Globe size={16} /> Translate
      </a>
      <a href="#" className={styles.link}>
        <Pen size={16} /> Write
      </a>
      <div className={styles.sectionTitle}>Tools</div>
      <a href="#" className={styles.link}>
        <Bookmark size={16} /> Editor
      </a>
      <a href="#" className={styles.link}>
        <Bookmark size={16} /> Bookmarks
      </a>
    </nav>
  </div>
);

export default ToolsSidebar;
