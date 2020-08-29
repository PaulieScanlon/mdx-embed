import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',

  colorPrimary: '#fcb42d',
  colorSecondary: 'black',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 0,

  // Typography
  fontBase: '"system-ui", sans-serif',
  fontCode: '"Roboto Mono", Menlo, monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#ccc',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#ccc',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'MDX Embed',
  brandUrl: 'https://www.mdx-embed.com/',
  brandImage: '/mdx-embed-logo.svg'
});

addons.setConfig({
  theme
});
