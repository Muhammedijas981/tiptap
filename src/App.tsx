import React from "react";
import { Layout } from "@/components/Layout";

export const App: React.FC = () => {
  return (
    <Layout
      header={<div className="p-4 bg-indigo-600 text-white">Vettam.AI</div>}
      sidebar={
        <nav className="p-4 space-y-4">
          {/* Example sidebar links */}
          <a href="#" className="block hover:text-indigo-600">
            Workspace
          </a>
          <a href="#" className="block hover:text-indigo-600">
            Research
          </a>
          <a href="#" className="block hover:text-indigo-600">
            Translate
          </a>
          <a href="#" className="block hover:text-indigo-600">
            Write
          </a>
        </nav>
      }
      footer={
        <div className="p-2 text-center text-sm text-gray-500">
          © 2025 Vettam AI
        </div>
      }
    >
      <main className="flex-1 p-6">
        {/* Your editor will mount here later */}
        <h1 className="text-2xl font-semibold mb-4">Editor Preview</h1>
        <p className="text-gray-600">
          This is where the Tiptap editor canvas will appear.
        </p>
      </main>
    </Layout>
  );
};

export default App;
