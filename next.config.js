// module.exports = {
//   webpack: cfg => {
//     cfg.module.rules.push({
//       test: /\.md$/,
//       use: "frontmatter-markdown-loader"
//     });
//     return cfg;
//   }
// };

const exportPathMap = require("./exportPathMap");

const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  exportPathMap,
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    });
    return cfg;
  }
});
