import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    exclude: [...configDefaults.exclude, '**/tests/**'],
    setupFiles: ['./vitest.setup.ts'],
  },
});
