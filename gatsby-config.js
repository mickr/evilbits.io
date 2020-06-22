module.exports = {
  siteMetadata: {
    title: 'Home of Mick Ryan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: "markdown-pages",
      },
    },
    'gatsby-transformer-remark',
  ],
};
