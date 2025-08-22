import React from "react";
import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.types";

export const Layout: React.FC<LayoutProps> = ({
  header,
  leftSidebar,
  rightSidebar,
  children,
  footer,
}) => {
  return (
    <div className={styles.container}>
      {header && <header className={styles.header}>{header}</header>}
      <div className={styles.contentArea}>
        {leftSidebar && (
          <aside className={styles.leftSidebar}>{leftSidebar}</aside>
        )}
        <main className={styles.main}>{children}</main>
        {rightSidebar && (
          <aside className={styles.rightSidebar}>{rightSidebar}</aside>
        )}
      </div>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </div>
  );
};

export default Layout;
