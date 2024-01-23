import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:
    [
      {find:'@app', replacement:path.resolve(__dirname,'./src/app')},
      {find:'@entities', replacement:path.resolve(__dirname,'./src/entities')},
      {find:'@page', replacement:path.resolve(__dirname,'./src/pages')},
      {find:'@widgets', replacement:path.resolve(__dirname,'./src/widgets')},
      {find:'@shared', replacement:path.resolve(__dirname,'./src/shared')},
      {find:'@slices', replacement:path.resolve(__dirname,'./src/app/redux/slices')},
  ],
    },
  }
)
