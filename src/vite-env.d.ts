/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

interface ImportMetaEnv {
  readonly TZ: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}