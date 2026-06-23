import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // IMPORTANT: never output: 'export' — this app has API routes.
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
