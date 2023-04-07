import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@packages': resolve(__dirname, './packages'),
    },
  },
  build: {
    lib: {
      entry: './packages/index.ts',
      name: 'index',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
  },
})
