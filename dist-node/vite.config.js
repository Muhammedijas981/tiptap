"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vite.config.ts
const vite_1 = require("vite");
const plugin_react_1 = require("@vitejs/plugin-react");
const url_1 = require("url");
const path_1 = require("path");
// ESM __dirname shim
const __filename = (0, url_1.fileURLToPath)(import.meta.url);
const __dirname = (0, path_1.dirname)(__filename);
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            "@": (0, path_1.resolve)(__dirname, "src"),
        },
    },
});
