# Gatsby Plugin MDX Embed

Gatsby Plugin MDX Embed allows you to easily _embed_ popular 3rd party media content such as YouTube videos, Tweets,
Instagram posts and many more straight into your `.mdx` - **no import required!**

[https://mdx-embed.com/](https://www.mdx-embed.com/)

## Install

```sh
npm install mdx-embed gatsby-plugin-mdx-embed --save
```

### Setup

add `gatsby-plugin-mdx-embed` to the `gatsby.config.js` plugins array.

```javascript
// gatsby-config.js
module.exports = {
  ...
  plugins: [`gatsby-plugin-mdx-embed`]
  ...
}
```

### Alternatively

The Gatsby plugin works by wrapping the Gatsby "Root Element" with the `MDXEmbedProvider`. If you encounter any issues
with the plugin you could try manually including the `MDXEmbedProvider` in your project by adding the following to
`gatsby-browser.js` and/or `gatsby-ssr.js`

```javascript
// gatsby-browser.js || gatsby-ssr.js
import React from 'react';
import { MDXEmbedProvider } from 'mdx-embed';

export const wrapRootElement = ({ element }) => {
  return <MDXEmbedProvider>{element}</MDXEmbedProvider>;
};
```

### Migration

If you were a user of `@pauliescanlon/gatsby-mdx-embed` here's how you can migrate to the new package and plugin.

**1. Remove the old plugin**

```sh
npm uninstall @pauliescanlon/gatsby-mdx-embed
```

**2. Install the new dependencies**

```sh
npm install mdx-embed gatsby-plugin-mdx-embed --save
```

**3. Remove the old plugin from `gatsby-config.js` and add the new plugin**

```diff
// gatsby-config.js
module.exports = {
  ...
  plugins: [
-    `@pauliescanlon/gatsby-mdx-embed`
+    `gatsby-plugin-mdx-embed`
    ]
  ...
}
```

For more information about how to install the plugin please see the
[docs](https://www.mdx-embed.com/?path=/docs/gatsby-plugin--page)
