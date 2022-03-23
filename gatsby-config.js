require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `Florian Braatz`,
    siteTitleAlt: `Florian Braatz - Portfolio Webpage`,
    siteHeadline: `Florian Braatz`,
    siteUrl: `https://whoisflorianbraatz.com`,
    siteDescription: `I personally use this site to introduce myself to new business contacts`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `F Braatz`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: "Florian Braatz",
        socialMedia: [
          { title: `Mail`, href: `mailto:contact@whoisflorianbraatz.com` },
          { title: `Download CV (DE)`, href: `/CV_Florian_Braatz.pdf` },
          {
            title: `LinkedIn`,
            href: `https://www.linkedin.com/in/florian-braatz/`,
          },
        ],
        showThemeAuthor: false,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "",
          // Setting this parameter is optional
          anonymize: true,
        },
        facebookPixel: {
          pixelId: "",
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Florian Braatz - Personal CV`,
        short_name: `Florian Braatz`,
        description: `I personally use this site to introduce myself to new business contacts`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
