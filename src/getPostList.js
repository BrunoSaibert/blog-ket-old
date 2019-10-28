// src/content.js

const posts = requirePosts();

export function getPosts() {
  return posts;
}

function requirePosts() {
  function requireAll(r) {
    return r.keys().map(r);
  }
  return requireAll(require.context("../content/blog", true, /\.md$/));
}

export function findDoc(slug) {
  return posts.find(p => p.attributes.slug === slug);
}
