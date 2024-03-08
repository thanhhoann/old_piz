/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [{ source: '/', destination: '/signin', permanent: true }]
  },
}

export default nextConfig
