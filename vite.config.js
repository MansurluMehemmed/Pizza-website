import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),

  ],
  theme:{
    extend:{
      animation:{
        "spin-slow":'spin 10s linear infinite'
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"2rem",
          sm:"1rem"
        }
      }
    }
  }
})
