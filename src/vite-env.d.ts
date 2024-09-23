 
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />

interface ImportMetaEnv {
  readonly TZ: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'countries-db' {
  /**
   * any
   */
  export default any
}