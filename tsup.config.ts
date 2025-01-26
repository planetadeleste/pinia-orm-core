import { writeFileSync } from "node:fs";
import { exec } from "node:child_process";
import { defineConfig } from "tsup";
import npmDts from "npm-dts";
import { generateDeclaration } from "dets";

const { Generator } = npmDts;

const configTsup = (sPackage: string, arImports: string[] = []) => {
  return defineConfig({
    entry: ["src/index.ts"],
    clean: true,
    dts: false,
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
    // eslint-disable-next-line require-await
    async onSuccess() {
      new Generator({
        output: "./dist/index.d.ts",
        force: true,
      })
        .generate()
        .then(async (r: any) => {
          console.log(r);
          console.log("Generate types");

          const arImportsList = [
            "@pinia-orm/axios",
            "axios",
            "lodash",
            "pinia",
            "pinia-orm",
          ];
          const arImportLibs = [...arImportsList, ...arImports];
          const content = await generateDeclaration({
            name: `@planetadeleste/${sPackage}/types`,
            root: process.cwd(),
            files: ["src/index.d.ts"],
            imports: arImportLibs,
          });

          console.log("Write types");
          writeFileSync("dist/types.d.ts", content, "utf8");
          const cmd = `dets src/index.d.ts --name "@planetadeleste/${sPackage}/types" --out dist/types.d.ts --imports ${arImportLibs.map((sItem) => `"${sItem}"`).join(" ")}`;
          exec(cmd, (error, stdout, stderr) => {
            if (error) {
              console.log(`error: ${error.message}`);
              return;
            }

            if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
            }

            console.log(stdout);
          });
          // console.log("Run command: " + cmd);
        });
    },
  });
};

export default configTsup;
