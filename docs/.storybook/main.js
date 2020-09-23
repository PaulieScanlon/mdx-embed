module.exports = {
  stories: ['../pages/**/*.stories.mdx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-links', 'storybook-addon-mdx-embed'],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
