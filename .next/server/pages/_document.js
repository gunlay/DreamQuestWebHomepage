const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules__pnpm_5afe26df._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__e237d7a2._.js");
runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.85.1/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.85.1/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
