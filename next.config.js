// module.exports = {
//   webpack: cfg => {
//     cfg.module.rules.push({
//       test: /\.md$/,
//       use: "frontmatter-markdown-loader"
//     });
//     return cfg;
//   }
// };

// parses a folder of markdown files into objects. very handy!
const jdown = require("jdown");

module.exports = {
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    });
    return cfg;
  },
  exportPathMap: async function() {
    // pages we know about beforehand
    const paths = {
      "/": { page: "/" },
      "/Sobre": { page: "/Sobre" },
      "/Contato": { page: "/Contato" }
    };
    // dynamic, data-generated pages
    const content = await jdown("content/blog"); // assumes some markdown files in a `/content` folder, with frontmatter that offers a slug
    const posts = []; // build up array of objects for the top level list
    Object.entries(content).forEach(([filename, fileContent]) => {
      // the filename becomes the slug
      paths[`/Post/${filename}`] = {
        page: "/Post/[slug]",
        query: {
          slug: filename,
          ...fileContent
        }
      };
    });
    return paths;
  }
};
