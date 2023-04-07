import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './packages/index.ts',
      name: 'index',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
  },
})
