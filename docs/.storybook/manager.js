import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import theme from '../src/theme';

const {
  colors: { primary, text, background, grey },
  fonts: { body, monospace },
} = theme;

addons.setConfig({
  theme: create({
    base: 'light',

    colorPrimary: primary,
    colorSecondary: text,

    // UI
    appBg: background,
    appContentBg: background,
    appBorderColor: background,
    appBorderRadius: 0,

    // Typography
    fontBase: body,
    fontCode: monospace,

    // Text colors
    textColor: text,
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: grey,
    barSelectedColor: text,
    barBg: background,

    // Form colors
    inputBg: background,
    inputBorder: grey,
    inputTextColor: text,
    inputBorderRadius: 4,

    brandTitle: 'MDX Embed',
    brandUrl: 'https://www.mdx-embed.com/',
    brandImage: '/mdx-embed-logo.svg',
  }),
});
