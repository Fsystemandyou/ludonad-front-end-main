import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  ignoreDuringBuilds: true,
};

module.exports = {
  eslint: {
    // Внимание: это позволит успешно завершать сборку даже при наличии ошибок ESLint.
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
