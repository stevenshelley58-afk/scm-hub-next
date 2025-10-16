import { defineConfig } from  @playwright/test;
export default defineConfig({
  timeout: 60000,
  retries: 1,
  webServer: { command: npm run -w @scm/materials dev, port: 5173 }
});
