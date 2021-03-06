const { addWebpackModuleRule, override } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  })
);
