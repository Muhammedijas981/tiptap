// src/App.tsx
import React from "react";
import "./index.css";
import Layout from "./components/Layout";
import { DocumentCanvas } from "./features/pagination";
import Toolbar from "./features/editor/components/Toolbar";
import { PageThumbnails, ToolsSidebar } from "./features/sidebar";
import { useEditorStore } from "./lib/zustand/store";
import HorizontalRuler from "./features/ruler/components/HorizontalRuler";
import { A4_DIMENSIONS } from "./constants/dimensions";

export const App: React.FC = () => {
  const {
    mode,
    showRuler,
    showHeaderFooter,
    currentPage,
    totalPages,
    setMode,
    toggleRuler,
    toggleHeaderFooter,
    setCurrentPage,
  } = useEditorStore();

  return (
    <Layout
      header={<div className="p-4 bg-indigo-600 text-white">Vettam.AI</div>}
      leftSidebar={<ToolsSidebar />}
      rightSidebar={
        <PageThumbnails
          totalPages={totalPages}
          currentPage={currentPage}
          onSelectPage={setCurrentPage}
        />
      }
      footer={
        <div className="p-2 text-center text-sm text-gray-500">
          © 2025 Vettam AI
        </div>
      }
    >
      <div className="flex flex-col h-full">
        <Toolbar
          editor={null}
          mode={mode}
          onModeChange={setMode}
          showRuler={showRuler}
          onRulerToggle={toggleRuler}
          showHeaderFooter={showHeaderFooter}
          onHeaderFooterToggle={toggleHeaderFooter}
        />

        {mode === "page" && showRuler && (
          <HorizontalRuler
            widthPx={A4_DIMENSIONS.WIDTH}
            unitCm={Math.round(A4_DIMENSIONS.WIDTH / 21)}
          />
        )}

        <main className="flex-1 p-6 overflow-auto">
          <DocumentCanvas />
        </main>
      </div>
    </Layout>
  );
};

export default App;
