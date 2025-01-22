import { i18n } from './next-i18next.config';

/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n,
};

export default nextConfig;
