// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {} // leave empty or configure if needed
  },
  serverExternalPackages: ['mongoose'],
  images: {
    domains: ['m.media-amazon.com']
  }
}

export default nextConfig;
