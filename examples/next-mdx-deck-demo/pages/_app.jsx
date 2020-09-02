import { AnimatePresence } from 'framer-motion'
import React from 'react'
import MDXProvider from '../components/mdxprovider'
import { ThemeProvider } from '../components/theme-provider'
import { CurrentSlideProvider } from '../context/current-slide-context'
import { ModeProvider } from '../context/mode-context'
import TransitionPage from '../layouts/transition-page'

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MDXProvider>
      <CurrentSlideProvider>
        <ModeProvider>
          <AnimatePresence exitBeforeEnter>
            <TransitionPage>
              <Component {...pageProps} />
            </TransitionPage>
          </AnimatePresence>
        </ModeProvider>
      </CurrentSlideProvider>
    </MDXProvider>
  </ThemeProvider>
)
