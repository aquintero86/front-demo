export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  app: {
    baseURL: '/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    head: {
      title:
        "Portal SCC PBO",
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    serveStatic: true,
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],
});
