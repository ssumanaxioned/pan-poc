exports.createPages = async function ({ actions, graphql }) {
  const movies = await graphql(`
  query MyQuery {
    allContentfulBlogs(filter: {node_locale: {eq: "en"}}) {
      nodes {
        slug
      }
      totalCount
    }
  }
  `);

  movies?.data?.allContentfulBlogs?.nodes?.forEach(item => {
    const { slug } = item;
    actions.createPage({
      path: `movies/${slug}`,
      component: require.resolve(`./src/templates/blog.js`),
      context: { slug: slug },
    })
  })

  const series = await graphql(`
  query MyQuery {
    allContentfulSeries(filter: {node_locale: {eq: "en"}}) {
      nodes {
        slug
      }
      totalCount
    }
  }
  `);

  series?.data?.allContentfulSeries?.nodes?.forEach(item => {
    const { slug } = item;
    actions.createPage({
      path: `series/${slug}`,
      component: require.resolve(`./src/templates/blog.js`),
      context: { slug: slug },
    })
  })
}