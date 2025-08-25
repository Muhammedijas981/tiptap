# Legal Document Editor with Advanced Pagination

A React + Tiptap based document editor specifically designed for legal document creation with advanced pagination, headers/footers, and print-ready output.

## 🎯 Assignment Requirements - COMPLETED

✅ **Visual page boundaries for A4** - Multiple A4-sized pages with proper spacing and shadows  
✅ **Manual page breaks** - Ctrl+Enter or toolbar button to insert page breaks  
✅ **Automatic page breaks** - Content automatically flows to next page when current page is full  
✅ **Rendered headers/footers** - Dynamic, editable headers and footers with page numbers  
✅ **Print/export compatibility** - Headers/footers and page breaks survive browser print  

## 🚀 Features

### Core Pagination
- **A4 Page Layout**: Exact A4 dimensions (794x1123px) with proper margins
- **Visual Page Boundaries**: Clear separation between pages with shadows
- **Automatic Content Flow**: Content automatically moves to next page when current page is full
- **No In-Page Scrolling**: Content is constrained within page boundaries

### Manual & Automatic Page Breaks
- **Manual Insertion**: `Ctrl+Enter` or toolbar button to insert page breaks
- **Visual Markers**: Dashed line indicators for manual page breaks
- **Automatic Detection**: Content overflow automatically creates new pages
- **Print Compatibility**: Page breaks are preserved in print/export

### Dynamic Headers & Footers
- **Editable Content**: Click to edit headers and footers per page
- **Dynamic Page Numbers**: Automatic "Page X of Y" functionality  
- **Toggle Visibility**: Show/hide headers and footers via toolbar
- **Print Preservation**: Headers/footers appear correctly in printed output

### Rich Text Editing
- **Full Tiptap Integration**: Bold, italic, underline, lists
- **Font Controls**: Font family and size selection
- **Keyboard Shortcuts**: Standard text editing shortcuts
- **Real-time Updates**: All changes reflected immediately

### Advanced UI
- **Dual Sidebars**: Tools navigation (left) and page thumbnails (right)
- **Mode Switching**: Text mode vs Page mode with different controls
- **Rulers**: Horizontal ruler with CM markings for precise layout
- **Page Navigation**: Click any page thumbnail to jump to that page

## 🏗️ Architecture

### Technology Stack
- **React 18** with TypeScript for type safety
- **Tiptap** as the rich text editor foundation
- **Zustand** for lightweight state management
- **Tailwind CSS** for styling with CSS modules for components
- **Vite** for fast development and building

### Project Structure
