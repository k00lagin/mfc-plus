import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import zip from "rollup-plugin-zip";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import preprocess from 'svelte-preprocess';
import {
  chromeExtension,
  simpleReloader,
} from "rollup-plugin-chrome-extension";
import { emptyDir } from "rollup-plugin-empty-dir";

const production = !process.env.ROLLUP_WATCH;

function contentConfig(file) {
  return {
    input: `content-src/${file}`,
    output: {
      file: `src/content/${file}`,
      format: 'cjs',
      inlineDynamicImports: true
    },
    plugins: [
      postcss({ minimize: production }),
      svelte({
        preprocess: preprocess({
          postcss: {
            plugins: [
             require("tailwindcss"),
             require("autoprefixer"),
            ],
          },
        }),
        emitCss: false,
      })
    ],
  }
}

export default [
  {
    ...contentConfig('my-documents-mfc-plus.js')
  },
  {
    ...contentConfig('my-documents-mfc.js')
  },
  {
    ...contentConfig('arm-esia.js')
  },
  {
    input: "src/manifest.json",
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [
      // always put chromeExtension() before other plugins
      chromeExtension(),
      simpleReloader(),
      svelte({
        compilerOptions: {
          // enable run-time checks when not in production
          dev: !production,
        },
      }),
      postcss({ minimize: production }),
      // the plugins below are optional
      resolve({
        dedupe: ["svelte"],
      }),
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      commonjs(),
      // Empties the output dir before a new build
      emptyDir(),
      // If we're building for production, minify
      production && terser(),
      // Outputs a zip file in ./releases
      production && zip({ dir: "releases" }),
    ],
  }
];
