const fs = require("fs");
const path = require("path");

const structure = [
  // Public
  "public/favicon.ico",
  "public/index.html",

  // Root files
  "src/App.tsx",
  "package.json",
  "tsconfig.json",
  "vite.config.ts",
  "README.md",

  // Components
  "src/components/ui/Button/index.tsx",
  "src/components/ui/Button/Button.types.ts",
  "src/components/ui/Button/Button.module.css",
  "src/components/ui/Input/index.tsx",
  "src/components/ui/Input/Input.types.ts",
  "src/components/ui/Input/Input.module.css",
  "src/components/ui/Modal/index.tsx",
  "src/components/ui/Modal/Modal.types.ts",
  "src/components/ui/Modal/Modal.module.css",
  "src/components/ui/index.ts",
  "src/components/Layout/index.tsx",
  "src/components/Layout/Layout.types.ts",
  "src/components/Layout/Layout.module.css",
  "src/components/index.ts",

  // Editor Feature
  "src/features/editor/components/EditorContainer/index.tsx",
  "src/features/editor/components/EditorContainer/EditorContainer.types.ts",
  "src/features/editor/components/EditorContainer/EditorContainer.module.css",
  "src/features/editor/components/TiptapEditor/index.tsx",
  "src/features/editor/components/TiptapEditor/TiptapEditor.types.ts",
  "src/features/editor/components/TiptapEditor/TiptapEditor.module.css",
  "src/features/editor/components/Toolbar/index.tsx",
  "src/features/editor/components/Toolbar/Toolbar.types.ts",
  "src/features/editor/components/Toolbar/Toolbar.module.css",
  "src/features/editor/extensions/PaginationExtension.ts",
  "src/features/editor/extensions/HeaderFooterExtension.ts",
  "src/features/editor/extensions/PageBreakExtension.ts",
  "src/features/editor/extensions/index.ts",
  "src/features/editor/hooks/useEditor.ts",
  "src/features/editor/hooks/useEditorCommands.ts",
  "src/features/editor/hooks/index.ts",
  "src/features/editor/store/editorStore.ts",
  "src/features/editor/store/editorActions.ts",
  "src/features/editor/store/index.ts",
  "src/features/editor/types/editor.types.ts",
  "src/features/editor/types/index.ts",
  "src/features/editor/index.ts",

  // Lib
  "src/lib/tiptap/config.ts",
  "src/lib/tiptap/extensions.ts",
  "src/lib/tiptap/commands.ts",
  "src/lib/zustand/store.ts",
  "src/lib/zustand/middleware.ts",
  "src/lib/index.ts",

  // Hooks
  "src/hooks/useLocalStorage.ts",
  "src/hooks/useDebounce.ts",
  "src/hooks/useMediaQuery.ts",
  "src/hooks/useKeyboard.ts",
  "src/hooks/index.ts",

  // Types
  "src/types/global.types.ts",
  "src/types/api.types.ts",
  "src/types/document.types.ts",
  "src/types/ui.types.ts",
  "src/types/index.ts",

  // Utils
  "src/utils/format/text.ts",
  "src/utils/format/measurements.ts",
  "src/utils/format/index.ts",
  "src/utils/dom/calculations.ts",
  "src/utils/dom/events.ts",
  "src/utils/dom/index.ts",
  "src/utils/print/css.ts",
  "src/utils/print/export.ts",
  "src/utils/print/index.ts",
  "src/utils/index.ts",

  // Styles
  "src/styles/globals.css",
  "src/styles/print.css",
  "src/styles/variables.css",
  "src/styles/themes/light.css",
  "src/styles/themes/dark.css",
  "src/styles/components/page.css",
  "src/styles/components/editor.css",

  // Constants
  "src/constants/dimensions.ts",
  "src/constants/styles.ts",
  "src/constants/keyboard.ts",
  "src/constants/editor.ts",
  "src/constants/index.ts",
];

// Create folders and files
structure.forEach((filePath) => {
  const fullPath = path.resolve(filePath);
  const dir = path.dirname(fullPath);

  // Create the folder if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log("Created folder:", dir);
  }

  // Create file only if it doesn't already exist
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, "");
    console.log("Created file:", fullPath);
  } else {
    console.log("Skipped (already exists):", fullPath);
  }
});
