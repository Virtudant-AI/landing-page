// Free For Charity hosting = static site on GitHub Pages.
// `output: "export"` writes a fully static site to ./out (no server runtime).
// Set NEXT_PUBLIC_BASE_PATH="/<repo-name>" for a project page (github.io/<repo>);
// leave it empty when a custom domain (e.g. yourcharity.org) points at the site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
