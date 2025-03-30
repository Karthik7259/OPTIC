import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5177, // Change this to any fixed port you want
    strictPort: true, // Ensures Vite fails if the port is unavailable
  },

  plugins: [react(),
    tailwindcss()
  ],
})
