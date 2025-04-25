/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '/meteora-base',
  basePath: '/meteora-base',
  images: {
    loader: 'custom',
    loaderFile: './src/app/imagem.js',
  },
};

export default nextConfig;
