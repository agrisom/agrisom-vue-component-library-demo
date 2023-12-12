import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import typescript2 from 'rollup-plugin-typescript2';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"]
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/LibraryDeclaration.ts",
      formats: ["es", "cjs"],
      name: "LibraryDeclaration",
      fileName: format => `agrisom-vue-component-library-demo.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'agrisom-vue-component-library-demo': resolve(__dirname, 'src/LibraryDeclaration'),
    },
  },
});
