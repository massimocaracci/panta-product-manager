const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_cf8cb749._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__15f0b84d._.js");
runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
