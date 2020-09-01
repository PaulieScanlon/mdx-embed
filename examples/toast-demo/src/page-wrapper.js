/** @jsx h */
import { MDXProvider } from '@mdx-js/preact';
import { MDXEmbedProvider } from 'mdx-embed';
import { h } from 'preact';

export default ({ children, ...props }) => {
  return (
    <div>
      <header>
        <div>
          <h1>
            <a href="/">MDX Embed Toast Demo</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/garden">Garden</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <MDXProvider
        components={{
          h1: (props) => <h1 {...props} />,
          inlineCode: ({ children }) => (
            <code
              style={{
                backgroundColor: 'rgb(1,22,39)',
                padding: 3,
                margin: 3,
                borderRadius: 5,
                color: '#f0f0f0',
              }}
            >
              {children}
            </code>
          ),
          pre: (props) => {
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: props.children.props.children,
                }}
              />
            );
          },
        }}
      >
        <MDXEmbedProvider>{children}</MDXEmbedProvider>
      </MDXProvider>
    </div>
  );
};
