import React from "react";
import "./index.css";
import { Layout } from "./components/Layout";
import { DocumentCanvas } from "./features/pagination";
import { Toolbar } from "./features/editor/components/Toolbar";
import { PageThumbnails } from "./features/sidebar";
import { useEditorStore } from "./lib/zustand/store";

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
    setTotalPages,
  } = useEditorStore();

  return (
    <Layout
      header={<div className="p-4 bg-indigo-600 text-white">Vettam.AI</div>}
      sidebar={
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

        <main className="flex-1 p-6 overflow-auto">
          <DocumentCanvas />
        </main>
      </div>
    </Layout>
  );
};

export default App;
