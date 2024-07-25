import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8082",
    // Default hd viewport
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
