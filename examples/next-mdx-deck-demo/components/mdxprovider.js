import { MDXProvider } from '@mdx-js/react'
import { MDXEmbedProvider } from 'mdx-embed'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia'
import SlidePage from '../layouts/slide-page'
import Cover from './cover'
import SpeakerNotes from './speaker-notes'
import { Split } from './split'

const mdComponents = {
  h1: props => <h1 {...props} />,
  pre: props => props.children,
  code: props => {
    const { className } = props
    const language = className.replace('language-', '')
    return (
      <SyntaxHighlighter
        className={className}
        language={language}
        style={okaidia}
        {...props}
      />
    )
  },
  Cover,
  SlidePage,
  SpeakerNotes,
  Split,
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>
    <MDXEmbedProvider>{children}</MDXEmbedProvider>
  </MDXProvider>
)
