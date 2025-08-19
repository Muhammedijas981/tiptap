import React from "react";
import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.types";

export const Layout: React.FC<LayoutProps> = ({
  header,
  sidebar,
  children,
  footer,
}) => {
  return (
    <div className={styles.container}>
      {header && <header className={styles.header}>{header}</header>}
      <div className={styles.contentArea}>
        {sidebar && <aside className={styles.sidebar}>{sidebar}</aside>}
        <main className={styles.main}>{children}</main>
      </div>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </div>
  );
};
