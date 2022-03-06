module.exports = {
  siteMetadata: {
    title: `FiisutWeb`,
    description: `Fiisut songbook`,
    author: `FK Tech Support`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/books/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FiisutWeb`,
        short_name: `FiisutWeb`,
        start_url: `/`,
        background_color: `#ac6a4a`,
        theme_color: `#795548`,
        display: `minimal-ui`,
        icon: `src/images/snapsen-icon.png`, // This path is relative to the root of the site.
        display: `standalone`,
      },
    },
    // 'gatsby-plugin-styled-components',
    `gatsby-plugin-offline`,
  ],
}
