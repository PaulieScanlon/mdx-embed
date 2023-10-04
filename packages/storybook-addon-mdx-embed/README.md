# Storybook Addon MDX Embed

MDX Embed allows you to easily _embed_ popular 3rd party media content such as YouTube videos, Tweets, Instagram posts
and many more straight into your `.mdx` - **no import required!**

[https://mdx-embed.netlify.app/](https://mdx-embed.netlify.app/)

## Install

```sh
npm install mdx-embed storybook-addon-mdx-embed --save
```

### Setup

Add `storybook-addon-mdx-embed` to your `addons` array in `main.js`

```javascript
// main.js
module.exports = {
 ...
  addons: ['storybook-addon-mdx-embed']
};

```

### Alternatively

The plugin works by using Storybooks' parameters export and wrapping the docs children with the `MDXEmbedProvider`.

If you encounter any issues with the addon you could try manually including the `MDXEmbedProvider` in you project.
Ensure you have removed the addon from your dependencies and addons array in `main.js` then add the following to
`preview.js`

```javascript
// preview.js
import React from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { MDXEmbedProvider } from 'mdx-embed';

export const parameters = {
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <MDXEmbedProvider>{children}</MDXEmbedProvider>
      </DocsContainer>
    ),
  },
};
```

For more information about how to install the package please see the
[docs](https://mdx-embed.netlify.app/?path=/docs/storybook-addon--page)
