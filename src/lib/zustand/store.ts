// src/lib/zustand/store.ts
import { create } from "zustand";

export type EditorMode = "text" | "page";

interface EditorState {
  mode: EditorMode;
  showRuler: boolean;
  showHeaderFooter: boolean;
  characterCount: number;
  currentPage: number;
  totalPages: number;
}

interface EditorActions {
  setMode: (mode: EditorMode) => void;
  toggleRuler: () => void;
  toggleHeaderFooter: () => void;
  setCharacterCount: (count: number) => void;
  setCurrentPage: (page: number) => void;
  setTotalPages: (total: number) => void;
}

export const useEditorStore = create<EditorState & EditorActions>((set) => ({
  // State
  mode: "text",
  showRuler: false,
  showHeaderFooter: false,
  characterCount: 0,
  currentPage: 1,
  totalPages: 1,

  // Actions
  setMode: (mode) => set({ mode }),
  toggleRuler: () => set((state) => ({ showRuler: !state.showRuler })),
  toggleHeaderFooter: () =>
    set((state) => ({ showHeaderFooter: !state.showHeaderFooter })),
  setCharacterCount: (count) => set({ characterCount: count }),
  setCurrentPage: (page) => set({ currentPage: page }), // removed extra `)`
  setTotalPages: (total) => set({ totalPages: total }), // removed extra `)`

  
}));
