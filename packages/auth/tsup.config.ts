import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/shopaholic/index.ts',
    'src/ordersshopaholic/index.ts',
  ],
  clean: true,
  dts: false,
  format: ['esm', 'cjs'],
  keepNames: true,
  metafile: false,
  minify: true,
  sourcemap: false,
  splitting: false,
  outExtension({ format }) {
    switch (format) {
      case 'cjs': {
        return { js: '.cjs', dts: '.d.cts' };
      }
      case 'esm': {
        return { js: '.mjs', dts: '.d.mts' };
      }
      default: {
        return { js: '.js', dts: '.d.ts' };
      }
    }
  }
});
