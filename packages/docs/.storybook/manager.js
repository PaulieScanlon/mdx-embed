import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'MDX Embed',
  brandUrl: 'https://www.mdx-embed.com/'
});

addons.setConfig({
  theme
});
