import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

// Exclude the problematic file from being watched
const ignoredFiles = ['C:/DumpStack.log.tmp']

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: {
    watch: {
      ignored: ignoredFiles
    }
  }
})
