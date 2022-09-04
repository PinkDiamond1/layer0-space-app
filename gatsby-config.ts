import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Layer 0 Space`,
    siteUrl: `https://layer0.space`,
    description: `Cross-consensus heterogeneous asset swap based on LayerZero messaging protocol and Polkadot XCM`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Layer 0 Space`,
        short_name: `Layer 0 Space`,
        start_url: `/`,
        background_color: `#0b1619`,
        theme_color: `#42d5d6`,
        display: `standalone`,
        icon: `static/logo-compact-transparent.png`,
      },
    },
  ],
};

export default config;
