
import React, { useState } from "react";
import "./index.css";
import Layout from "./components/Layout";
import { DocumentCanvas } from "./features/pagination";
import Toolbar from "./features/editor/components/Toolbar";
import { PageThumbnails, ToolsSidebar } from "./features/sidebar";
import { useEditorStore } from "./lib/zustand/store";
import HorizontalRuler from "./features/ruler/components/HorizontalRuler";
import { A4_DIMENSIONS } from "./constants/dimensions";

export const App: React.FC = () => {
  const [currentEditor, setCurrentEditor] = useState<any>(null);

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

  const handleEditorReady = (editor: any) => {
    setCurrentEditor(editor);
  };

  return (
    <Layout
      leftSidebar={<ToolsSidebar />}
      rightSidebar={
        <PageThumbnails
          totalPages={totalPages}
          currentPage={currentPage}
          onSelectPage={setCurrentPage}
        />
      }
    >
      <div className="flex flex-col h-full w-full items-center">
        <div className="w-full max-w-[900px] flex flex-col">
          <Toolbar
            editor={currentEditor}
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

          <main className="flex justify-center p-6 overflow-auto">
            <DocumentCanvas onEditorReady={handleEditorReady} />
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default App;
