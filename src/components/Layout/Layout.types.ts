import React from "react";

export interface LayoutProps {
  header?: React.ReactNode;
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}
