const { withContentlayer } = require("next-contentlayer");
// const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  // swcMinify: true
  //   sassOptions: {
  //     includePaths: [path.join(__dirname, "styles")],
  //   },
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
