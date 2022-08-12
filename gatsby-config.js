module.exports = {
  siteMetadata: {
    title: `KekeGo`,
    description: `Fast & easy transportation within Babcock University. `,
    author: `@KekeGo`,
    siteUrl: `https://https://kekegoapp.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KekeGo`,
        short_name: `KekeGo`,
        start_url: `/`,
        background_color: `#1C5AF6`,
        theme_color: `#1C5AF6`,
        display: `minimal-ui`,
        icon: `src/images/kekego-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WL2Q9F5",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
  ],
}
