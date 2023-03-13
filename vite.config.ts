/// <reference types="vitest" />
/// <reference types="Vite/Client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    includeSource:['src/**/*.{ts,tsx}'],
    environment:"jsdom",
    globals:true,
  }
})
