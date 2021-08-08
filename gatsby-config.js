module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "MinimalLandingPage",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        title: `Luca Gerlich`,
        name: `Luca Gerlich`,
        short_name: `Luca Gerlich`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/image/icon.png`,
      },
    },
  ],
};
