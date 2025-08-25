import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";

const PAGE_HEIGHT = 931; 
const LINE_HEIGHT = 18; 

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
                
                currentHeight = PAGE_HEIGHT;
                nodeHeight = 0;
              }

              
              if (currentHeight + nodeHeight > PAGE_HEIGHT) {
                
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
