// import { cp } from "node:fs";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  dts: true,
  experimentalDts: false,
  format: ["esm", "cjs"],
  keepNames: true,
  metafile: false,
  minify: true,
  sourcemap: false,
  splitting: false,
  outExtension({ format }) {
    switch (format) {
      case "cjs": {
        return { js: ".cjs", dts: ".d.cts" };
      }
      case "esm": {
        return { js: ".mjs", dts: ".d.mts" };
      }
      default: {
        return { js: ".js", dts: ".d.ts" };
      }
    }
  },
  /* onSuccess(): Promise<void> {
    cp("./src/index.d.ts", "./dist/index.d.ts", (err) => {
      if (err) {
        console.error(err);
      }
    });

    return Promise.resolve();
  }, */
});
