import React from "react";
import "./index.css";
import { Layout } from "./components/Layout";
import DocumentCanvas from "./features/pagination/components/DocumentCanvas";

export const App: React.FC = () => {
  return (
    <Layout
      header={<div className="p-4 bg-indigo-600 text-white">Vettam.AI</div>}
      sidebar={null}
      footer={
        <div className="p-2 text-center text-sm text-gray-500">
          © 2025 Vettam AI
        </div>
      }
    >
      <main className="p-6">
        <DocumentCanvas pageCount={2} />
      </main>
    </Layout>
  );
};

export default App;
