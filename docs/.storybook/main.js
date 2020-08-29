module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  addons: ['@storybook/addon-docs'],
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
