const { withContentlayer } = require("next-contentlayer");
// const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // reactStrictMode: true,
  // swcMinify: true
  //   sassOptions: {
  //     includePaths: [path.join(__dirname, "styles")],
  //   },

  env: {
    DATABASE_URL:
      "postgres://javanance:z8V0yejhWvAI@ep-spring-boat-25707069-pooler.ap-southeast-1.aws.neon.tech/neondb?schema=public&pgbouncer=true&connect_timeout=20",
  },
};

module.exports = withContentlayer(nextConfig);

// import { withContentlayer } from 'next-contentlayer'
// export default withContentlayer({
//   const nextConfig = {
//     output: "export",
//     // reactStrictMode: true,
//     // swcMinify: true
//     //   sassOptions: {
//     //     includePaths: [path.join(__dirname, "styles")],
//     //   },
//   }

// })
