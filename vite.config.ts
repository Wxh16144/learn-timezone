import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), Pages()],
    base: env.BASE_URL ?? '/',
    define: {
      __TIMEZONE__: JSON.stringify(env.TZ ?? 'Asia/Shanghai')
    }
  }
})