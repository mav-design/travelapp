import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      
      "@app": `${path.resolve(__dirname,'src/app/')}`,
      "@entities": `${path.resolve(__dirname,'src/entities/')}`,
      "@page": `${path.resolve(__dirname,'src/pages/')}`,
      "@widgets": `${path.resolve(__dirname,'src/widgets/')}`,
      "@shared": `${path.resolve(__dirname,'src/shared/')}`,
      "@features": `${path.resolve(__dirname,'src/features/')}`,
      "@slices": `${path.resolve(__dirname,'src/app/redux/slices/')}`}
    },
  },
);
