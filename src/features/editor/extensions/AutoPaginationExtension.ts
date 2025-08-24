import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";

const PAGE_HEIGHT = 931; // A4 content height in pixels
const LINE_HEIGHT = 18; // Approximate line height in pixels

export const AutoPaginationExtension = Extension.create({
  name: "autoPagination",

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("autoPagination"),

        props: {
          decorations: (state) => {
            const decorations: Decoration[] = [];
            let currentHeight = 0;
            let pageNumber = 1;

            state.doc.descendants((node, pos) => {
              if (node.isText) return;

              // Estimate node height
              let nodeHeight = 0;
              if (node.type.name === "paragraph") {
                nodeHeight =
                  LINE_HEIGHT *
                  Math.max(1, Math.ceil(node.textContent.length / 80));
              } else if (node.type.name === "heading") {
                nodeHeight = LINE_HEIGHT * 1.5;
              } else if (node.type.name === "listItem") {
                nodeHeight = LINE_HEIGHT;
              } else if (node.type.name === "pageBreak") {
                // Force new page
                currentHeight = PAGE_HEIGHT;
                nodeHeight = 0;
              }

              // Check if we need a page break
              if (currentHeight + nodeHeight > PAGE_HEIGHT) {
                // Insert automatic page break decoration
                decorations.push(
                  Decoration.widget(
                    pos,
                    () => {
                      const div = document.createElement("div");
                      div.className = "auto-page-break";
                      div.setAttribute("data-page", pageNumber.toString());
                      return div;
                    },
                    { side: -1 }
                  )
                );

                currentHeight = nodeHeight;
                pageNumber++;
              } else {
                currentHeight += nodeHeight;
              }
            });

            return DecorationSet.create(state.doc, decorations);
          },
        },
      }),
    ];
  },

  addGlobalAttributes() {
    return [
      {
        types: ["paragraph", "heading", "listItem"],
        attributes: {
          "data-page": {
            default: null,
          },
        },
      },
    ];
  },
});
