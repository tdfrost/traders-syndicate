/** @type {import('next').NextConfig} */
const isProd = (process.env.NODE_ENV = "production")

const nextConfig = {
  assetPrefix: isprod ? "/traders-syndicate/" : "",
  basePath: isProd ? "/traders-syndicate" : "",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
