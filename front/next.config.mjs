/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Permitir todos los dominios
        },
        {
          protocol: 'http',
          hostname: '**', // También permitir HTTP, si es necesario
        },
      ],
    },
  };
  
  export default nextConfig;
  