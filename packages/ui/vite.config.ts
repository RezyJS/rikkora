import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.json',
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'styles',
    },

    rollupOptions: {
      external: (id) => /^(react|react-dom)(\/|$)/.test(id) || id.startsWith('@radix-ui/') || id === '@tabler/icons-react' || id.startsWith('@tabler/icons-react/'),
    },
  },
});
