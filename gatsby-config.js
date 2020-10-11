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
        name: `What Government support is there?`,
        link: `/employers/what-government-support-is-there`,
        subMenu: [
          {
            anchorName: `Free apprenticeships and traineeships`,
            anchorLink: `/employers/how-do-I-claim/example`,
          },
          {
            anchorName: `Apprenticeship Boost`,
            anchorLink: `/employers/how-do-I-claim/example`,
          },
          {
            anchorName: `Mana in mahi`,
            anchorLink: `/employers/how-do-I-claim/example`,
          },
          {
            anchorName: `Regional Apprenticeship Fund`,
            anchorLink: `/employers/how-do-I-claim/example`,
          },
        ],
      },
      {
        name: `How Competenz grows your business`,
        link: ``,
        subMenu: [
          {
            anchorName: `Our sales pitch for taking new people`,
            anchorLink: `/employers/how-is-the-money-sorted/example`,
          },
          {
            anchorName: `example`,
            anchorLink: `/employers/how-is-the-money-sorted/example`,
          },
        ],
      },
      {
        name: `Find my funding`,
        link: `/employers/how-is-the-money-sorted`,
        subMenu: [
          {
            anchorName: `What sectors and levels are eligible?`,
            anchorLink: `/employers/how-is-the-money-sorted/example`,
          },
          {
            anchorName: `Check our quick funding navigator`,
            anchorLink: `/employers/how-is-the-money-sorted/example`,
          },
        ],
      },
      {
        name: `How do I claim reimbursement?`,
        link: `/employers/what-am-I-eligible-for`,
        subMenu: [
          {
            anchorName: `For costs paid to a provider`,
            anchorLink: `/employers/what-am-I-eligible-for/example`,
          },
          {
            anchorName: `For costs paid to a forestry trainer`,
            anchorLink: `/employers/what-am-I-eligible-for/example`,
          },
          {
            anchorName: `Resources`,
            anchorLink: `/employers/what-am-I-eligible-for/example`,
          },
        ],
      },
    ],
    apprenticeMenuLinks: [
      {
        name: `What Government support is there?`,
        link: `/apprentices/what-government-support-is-there`,
        subMenu: [
          {
            anchorName: `Free apprenticeships and traineeships`,
            anchorLink: `/apprentices/what-government-support-is-there/example`,
          },
          {
            anchorName: `Apprenticeship Boost`,
            anchorLink: `/apprentices/what-government-support-is-there/example`,
          },
          {
            anchorName: `Mana in mahi`,
            anchorLink: `/employers/how-do-I-claim/example`,
          },
          {
            anchorName: `Regional Apprenticeship Fund`,
            anchorLink: `/employers/how-do-I-claim/example`,
          },
        ],
      },
      {
        name: `How do I sign up?`,
        link: `/apprentices/how-do-I-sign-up`,
        subMenu: [
          {
            anchorName: `Job board and explainer`,
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
            anchorName: `Do I get a refund?`,
            anchorLink: `/apprentices/I-already-have-an-apprenticeship/example`,
          },
          {
            anchorName: `How are my fees handled?`,
            anchorLink: `/apprentices/I-already-have-an-apprenticeship/example`,
          },
        ],
      },
    ],
    providersMenuLinks: [
      {
        name: `Providers`,
        link: `/providers/providers`,
        subMenu: [
          {
            anchorName: `Reimbursements for your customers`,
            anchorLink: `/providers/providers/example`,
          },
          {
            anchorName: `Level 1`,
            anchorLink: `/providers/providers/example`,
          },
          {
            anchorName: `Level 2`,
            anchorLink: `/providers/providers/example`,
          },
          {
            anchorName: `Resources`,
            anchorLink: `/providers/providers/example`,
          },
        ],
      },
      {
        name: `Contract assessors`,
        link: `/providers/educators-info`,
        subMenu: [
          {
            anchorName: `Reimbursements for your customers`,
            anchorLink: `/providers/educators-info/example`,
          },
          {
            anchorName: `Resources`,
            anchorLink: `/providers/educators-info/example`,
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
