/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'dallasconcretepros.net' }],
        destination: 'https://www.dallasconcretepros.net/:path*',
        permanent: true,
      },
      {
        // Duplicates the geo-target already covered by /services/concrete-driveways
        // (Dallas is the home city, so the general service page IS the Dallas page).
        // See src/data/redirects.ts.
        source: '/services/concrete-driveways/dallas',
        destination: '/services/concrete-driveways',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
