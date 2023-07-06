/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Demo`,
    siteUrl: `${process.env.GATSBY_SITE_URL}`
  },
  trailingSlash: "ignore",
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "xCXWWjAbKvRfPHVosFhShYqsIWST38GdVOhnhV7AAJw",
      "spaceId": "4becev8p35vc"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-layout',
    options: {
      component: require.resolve('./src/components/layout/index.jsx'),
    },
  },
]
};