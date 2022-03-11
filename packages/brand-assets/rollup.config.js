import copy from 'rollup-plugin-copy'
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';

import packageJson from "./package.json";

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    copy({
      targets: [
        { src: 'src/assets', dest: 'dist/public/' }
      ]
    }),
    importMetaAssets()
  ]
};