/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable React Compiler for optimal performance in Next.js 15
  reactCompiler: true,
  // Optimize for production builds
  productionBrowserSourceMaps: false,
  // Enable SWR data fetching optimizations
  swrConfig: {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  },
  // Security headers for Vercel deployment
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains'
          }
        ]
      }
    ]
  }
}

export default nextConfig
