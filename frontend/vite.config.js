import dotenv from "dotenv";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command, mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return {
    define: {
      "process.env": process.env,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/assets/styles/index.scss" as global;`,
        },
      },
    },
  };
});

dotenv.config();
