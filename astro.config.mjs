// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bayupratamaputra.vercel.app", // ganti ke domain kamu kalau nanti pakai custom
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
