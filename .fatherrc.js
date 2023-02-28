export default {
  entry: ["src/index.js"],
  // babel -> lib目录下
  cjs: "rollup",
  // 打包方式 type
  esm: { type: "rollup", importLibToEs: true, 
  // mjs: true
 },
  //
  umd: true,
  doc: { base: "/switch" },
  preCommit: {
    eslint: true,
    prettier: true,
  },
};
