import { addons } from '@storybook/addons';
import { themes, create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // Typography
    fontBase:
      '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
    fontCode: 'monospace',

    brandTitle: 'MDX Embed',
    brandUrl: 'https://www.mdx-embed.com/',
    brandImage: 'https://www.mdx-embed.com/mdx-embed-logo.svg',
  }),
});
