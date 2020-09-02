# Next MDX Deck

Full credit to [Ryosuke] for [Next MDX Deck] for a full rundown of how
to use it check out the [README] on the Next MDX Deck repo.

To incorporate MDX Embed in your existing slides add it to the
`MDXProvider` in `components/mdxprovider.js`:

```js
export default ({ children }) => (
  <MDXProvider components={mdComponents}>
    <MDXEmbedProvider>{children}</MDXEmbedProvider>
  </MDXProvider>
)
```

To play around with this example add remove components in
`slides/1.mdx`.

<!-- Links -->

[ryosuke]: https://github.com/whoisryosuke
[next mdx deck]: https://github.com/whoisryosuke/next-mdx-deck
[readme]:
  https://github.com/whoisryosuke/next-mdx-deck/blob/master/README.md
