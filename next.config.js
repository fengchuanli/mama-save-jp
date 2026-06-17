const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGitHubPages ? "/mama-save-jp" : "",
  assetPrefix: isGitHubPages ? "/mama-save-jp/" : ""
};

module.exports = nextConfig;
