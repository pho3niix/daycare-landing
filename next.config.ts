import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /* Exportación estática equivalente al `dist` de Vue */
  // output: "export",

  // /* Tus configuraciones existentes */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;