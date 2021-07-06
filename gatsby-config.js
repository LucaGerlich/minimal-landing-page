module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "MinimalLandingPage",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luca Gerlich`,
        short_name: `Luca Gerlich`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/image/icon.png`,
      },
    },
  ],
};
