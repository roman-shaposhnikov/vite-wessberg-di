import type { Plugin } from "vite"

import ts from "typescript"
import typescript from "@rollup/plugin-typescript"
import { di as diCompiler } from "@wessberg/di-compiler"

const diTransformersFactory = (program: ts.Program) =>
  diCompiler({ program })

const di = (): Plugin => ({
  ...typescript({
    transformers: diTransformersFactory,
    exclude: ["**/*.test.ts"],
    tsconfig: "tsconfig.json",
    sourceMap: false,
  }),
  name: "vite-wessberg-di",
  enforce: "pre",
})

export default di
