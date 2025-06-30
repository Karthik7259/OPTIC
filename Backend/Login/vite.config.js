import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Add this server configuration block
  server: {
    port: 5173, // Set the desired port here (e.g., 3000)
    // Optional: Automatically open the app in the browser
    // open: true
  }
})
