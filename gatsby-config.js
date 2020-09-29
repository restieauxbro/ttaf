module.exports = {
  siteMetadata: {
    title: `Targeted Training and Apprenticeship Fund`,
    author: {
      name: `Competenz`,
      summary: `A quick site`,
    },
    description: `A TTAF UI concept`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: ``,
    },
    menuLinks: [
      {
        name: `What am I eligible for?`,
        link: `/what-am-I-eligible-for`,
        subMenu: [
          {
            anchorName: `example`,
            anchorLink: `/what-am-I-eligible-for/example`,
          },
          {
            anchorName: `example`,
            anchorLink: `/what-am-I-eligible-for/example`,
          },
        ],
      },
      {
        name: `How do I claim?`,
        link: `/how-do-I-claim`,
        subMenu: [
          {
            anchorName: `example3`,
            anchorLink: `/how-do-I-claim/example`,
          },
          {
            anchorName: `example4`,
            anchorLink: `/how-do-I-claim/example`,
          },
        ],
      },
      {
        name: `How is the money sorted?`,
        link: `/how-is-the-money-sorted`,
        subMenu: [
          {
            anchorName: `example3`,
            anchorLink: `/how-is-the-money-sorted/example`,
          },
          {
            anchorName: `example4`,
            anchorLink: `/how-is-the-money-sorted/example`,
          },
        ],
      },
      {
        name: `How do I claim?`,
        link: `/example`,
        subMenu: [
          {
            anchorName: `example3`,
            anchorLink: `example`,
          },
          {
            anchorName: `example4`,
            anchorLink: `example`,
          },
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/rootwrapper.jsx`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/Competenz_monogram_rgb_1.0.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
