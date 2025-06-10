import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'happy-dom',
    environment: 'happy-dom',
    setupFiles: ['./happydom.ts', './testing-library.ts']
  }
})
