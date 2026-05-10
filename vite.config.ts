import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: {},
  tanstackStart: {
    server: { entry: "server" }
  },
});