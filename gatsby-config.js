module.exports = {
  siteMetadata: {
    title: `Gatsby + Themes`,
    description: `Gatsby and Themes presented - delivered at React Finland on 04-25-2019`,
    author: `@schaudustin`,
  },
  __experimentalThemes: [
    {
      resolve: `@mdx-deck/gatsby-theme`,
      options: {
        name: `/` // route is root
      }
    }
  ],
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-themes`,
        short_name: `gatsby-themes`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
