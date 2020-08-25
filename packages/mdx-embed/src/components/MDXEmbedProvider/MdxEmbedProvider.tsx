import React, { FunctionComponent } from 'react'
import { MDXProvider } from '@mdx-js/react'

import { CodePen } from '../../index'

const components = {
  CodePen,
} as any

export const MDXEmbedProvider: FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
