const posts = requirePosts();

export function getPosts(page, page_size) {
  return posts.slice((page - 1) * page_size, page * page_size);
}

export function getTotalPost() {
  return posts.length;
}

function requirePosts() {
  function requireAll(r) {
    return r
      .keys()
      .map(r)
      .sort(
        (a, b) => new Date(b.attributes.date) - new Date(a.attributes.date)
      );
  }
  return requireAll(require.context("../content/blog", true, /\.md$/));
}

export function findDoc(slug) {
  return posts.find(p => p.attributes.slug === slug);
}
