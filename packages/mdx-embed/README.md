# MDX Embed

MDX Embed allows you to easily _embed_ popular 3rd party media content such as YouTube videos, Tweets, Instagram posts
and many more straight into your `.mdx` - **no import required!**

[https://mdx-embed.com/](https://www.mdx-embed.com/)

## Install

```sh
npm install mdx-embed --save
```

### Setup

Wrap your application with the `MDXEmbedProvider` and allow your MDX to render all of the provided components.

```javascript
import React from 'react';
import { MDXEmbedProvider } from 'mdx-embed';

export default (props) => <MDXEmbedProvider>{props.children}</MDXEmbedProvider>;
```

For more information about how to install the package please see the
[docs](https://www.mdx-embed.com/?path=/docs/mdx-embed--page)
