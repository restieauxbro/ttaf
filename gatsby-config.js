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
    employersMenuLinks: [
      {
        name: `What am I eligible for?`,
        link: `/employers/what-am-I-eligible-for`,
        subMenu: [
          {
            anchorName: `example`,
            anchorLink: `/employers/what-am-I-eligible-for/example`,
          },
          {
            anchorName: `example`,
            anchorLink: `/employers/what-am-I-eligible-for/example`,
          },
        ],
      },
      {
        name: `How do I claim?`,
        link: `/employers/how-do-I-claim`,
        subMenu: [
          {
            anchorName: `example`,
            anchorLink: `/employers/how-do-I-claim/example`,
          },
          {
            anchorName: `example`,
            anchorLink: `/employers/how-do-I-claim/example`,
          },
        ],
      },
      {
        name: `How is the money sorted?`,
        link: `/employers/how-is-the-money-sorted`,
        subMenu: [
          {
            anchorName: `example`,
            anchorLink: `/employers/how-is-the-money-sorted/example`,
          },
          {
            anchorName: `example`,
            anchorLink: `/employers/how-is-the-money-sorted/example`,
          },
        ],
      },
    ],
    apprenticeMenuLinks: [
      {
        name: `What am I eligible for?`,
        link: `/apprentices/what-am-I-eligible-for`,
        subMenu: [
          {
            anchorName: `example`,
            anchorLink: `/apprentices/what-am-I-eligible-for/example`,
          },
          {
            anchorName: `example`,
            anchorLink: `/apprentices/what-am-I-eligible-for/example`,
          },
        ],
      },
      {
        name: `How do I sign up?`,
        link: `/apprentices/how-do-I-sign-up`,
        subMenu: [
          {
            anchorName: `example3`,
            anchorLink: `/apprentices/how-do-I-sign-up/example`,
          },
          {
            anchorName: `example4`,
            anchorLink: `/apprentices/how-do-I-sign-up/example`,
          },
        ],
      },
      {
        name: `I already have an apprenticeship`,
        link: `/apprentices/I-already-have-an-apprenticeship`,
        subMenu: [
          {
            anchorName: `example3`,
            anchorLink: `/apprentices/I-already-have-an-apprenticeship/example`,
          },
          {
            anchorName: `example4`,
            anchorLink: `/apprentices/I-already-have-an-apprenticeship/example`,
          },
        ],
      },
      {
        name: `How do I claim?`,
        link: `/apprentices/how-do-I-claim`,
        subMenu: [
          {
            anchorName: `example3`,
            anchorLink: `/apprentices/how-do-I-claim/example`,
          },
          {
            anchorName: `example4`,
            anchorLink: `/apprentices/how-do-I-claim/example`,
          },
        ],
      },
    ],
    providersMenuLinks: [
      {
        name: `Educators' information`,
        link: `/providers/educators-info`,
        subMenu: [
          {
            anchorName: `example`,
            anchorLink: `/providers/educators-info/example`,
          },
          {
            anchorName: `example`,
            anchorLink: `/providers/educators-info/example`,
          },
        ],
      },
      {
        name: `Refunds`,
        link: `/providers/refunds`,
        subMenu: [
          {
            anchorName: `example`,
            anchorLink: `/providers/refunds/example`,
          },
          {
            anchorName: `example`,
            anchorLink: `/providers/refunds/example`,
          },
        ],
      },
      {
        name: `What happens?`,
        link: `/providers/what-happens`,
        subMenu: [
          {
            anchorName: `example`,
            anchorLink: `/providers/what-happens/example`,
          },
          {
            anchorName: `example`,
            anchorLink: `/providers/what-happens/example`,
          },
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
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
