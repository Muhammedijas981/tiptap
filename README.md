# Legal Document Editor - Assignment Submission

This is an assignment submitted to **Vettam AI** 👉 [https://vettam.ai/](https://vettam.ai/) as part of the **Frontend Developer Assignment**.

## 📌 Assignment Overview
The goal of this assignment was to design and implement a **prototype legal document editor** using **React + Tiptap**, focusing on advanced pagination and print-ready formatting. The editor is intended for **lawyers and legal professionals**, emphasizing structured document workflows with page-aware editing.
---

## 📋 Assignment Requirements - COMPLETED ✅

This project implements a **React + Tiptap based document editor** with advanced pagination features specifically designed for legal document workflows.

### ✅ Deliverables Completed

1. **✅ Visual page boundaries for A4** - Multiple A4-sized pages (794×1123px) with realistic shadows and spacing  
2. **✅ Manual page breaks** - Ctrl+Enter keyboard shortcut and toolbar button for precise page control  
3. **✅ Automatic page breaks** - Intelligent content overflow detection with seamless page flow  
4. **✅ Rendered headers/footers** - Dynamic, editable headers and footers with automatic page numbering  
5.  **✅ Comprehensive README** - Implementation details, constraints, trade-offs, and productionization roadmap

---

## 🚀 Key Features Implemented

### Core Document Editing
- **Rich Text Editor**: Full Tiptap integration with bold, italic, underline, lists  
- **A4 Page Layout**: Pixel-perfect A4 dimensions with proper margins (96px padding)  
- **No Scrolling Within Pages**: Content is constrained to page boundaries  
- **Real-time Formatting**: All text formatting reflects immediately

### Advanced Pagination System
- **Visual Page Separation**: Clear boundaries between pages with realistic shadows  
- **Automatic Content Flow**: Content automatically moves to next page when current page is full  
- **Manual Page Breaks**: Insert page breaks anywhere with Ctrl+Enter or toolbar button  
- **Page Break Indicators**: Visual dashed-line markers for manual page breaks

### Dynamic Headers & Footers
- **Clickable Editing**: Click header/footer areas to edit content directly  
- **Automatic Page Numbers**: Dynamic “Page X of Y” functionality  
- **Toggle Visibility**: Show/hide headers and footers via toolbar control  
- **Print Preservation**: Headers/footers appear correctly in printed documents

### Professional UI/UX
- **Dual Sidebar Layout**: Tools navigation (left) and page thumbnails (right)  
- **Mode Switching**: Text mode vs Page mode with contextual controls  
- **Horizontal Ruler**: CM-marked ruler for precise document layout  
- **Page Thumbnails**: Visual page navigation with active page highlighting  
- **Centered Layout**: All content properly centered in available space

---

## 🏗️ Technical Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript  
- **Editor**: Tiptap (ProseMirror-based)  
- **State**: Zustand (lightweight state management)  
- **Styling**: Tailwind CSS + CSS Modules  
- **Build**: Vite (fast development & building)  

### Project Structure
```bash
src/
├── components/          # Reusable UI components
│   ├── Layout/          # Main application layout
│   └── ui/              # Basic UI primitives (Button, Input, Modal)
├── features/            # Feature-based organization
│   ├── editor/          # Rich text editing functionality
│   │   ├── components/  # Editor UI (Toolbar, HeaderFooter)
│   │   └── extensions/  # Custom Tiptap extensions
│   ├── pagination/      # Page layout and content flow
│   │   ├── components/  # PageContainer, DocumentCanvas
│   │   └── hooks/       # Pagination logic hooks
│   ├── sidebar/         # Navigation and thumbnails
│   │   └── components/  # ToolsSidebar, PageThumbnails
│   └── ruler/           # Measurement ruler component
├── lib/                 # External library configurations
│   └── zustand/         # Global state management
├── constants/           # Application constants
├── styles/              # Global styles and print CSS
└── types/               # TypeScript type definitions
```

### Key Technical Decisions
1. **Tiptap Over Alternatives**  
   - Chosen for its modular extension system and React integration  
2. **Height-Based Pagination**  
   - Uses DOM measurement for accurate content height calculation  
3. **Zustand for State Management**  
   - Lightweight with minimal boilerplate and TypeScript support  

---

## ⚠️ Implementation Constraints & Trade-offs

1. **Content Splitting Accuracy**  
   - Complex elements may not split perfectly; prioritized development speed  
2. **Performance with Large Documents**  
   - Real-time pagination can lag with 50+ pages; uses debounce and plans for web workers  
3. **Cross-Browser Print Compatibility**  
   - Print CSS varies; tested primarily on Chrome  
4. **Mobile Responsiveness**  
   - Fixed A4 dimensions; desktop-first focus  

---

## 🚀 Productionization Roadmap

### Phase 1: Foundation Stability
- Comprehensive testing (unit, integration, e2e)  
- Performance optimization (virtual scrolling, web workers)  
- Accessibility enhancements (WCAG compliance)

### Phase 2: Advanced Features 
- Professional PDF export (Puppeteer/pdf-lib)  
- Document templates and collaboration features

### Phase 3: Enterprise-Ready Enhancements
- Security & compliance (RBAC, encryption, audit logs)  
- Backend integration (REST APIs, cloud storage)

---

## 🔧 Setup & Usage

### Local Development
```bash
git clone https://github.com/Muhammedijas981/tiptap
cd  tiptap
npm install
npm run dev
```
---

## 📝 Assignment Submission

This project constitutes my submission for the **Frontend Developer (React/TypeScript) assignment** at Vettam AI, demonstrating advanced pagination, header/footer editing, and print-ready export in a legal document editor.
