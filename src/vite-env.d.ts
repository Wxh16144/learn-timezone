/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly TZ: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}