require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Mathematics, Engineering and Data Science by Ashish Thanki`,
    siteImage: `/icon.png`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Welcome`,
            slug: `/`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Blogs`,
            slug: `/blog`,
          },
          {
            title: `Tags`,
            slug: `/tags`,
          }, 
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/ashish__thanki`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/athanki/`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/ashishthanki`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Articles about Data Science, Statitstics, Machine Learning and many more.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: `static/icon.png`,
          },
      },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
