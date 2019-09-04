import React, {Fragment} from 'react'
import {MDXProvider} from '@mdx-js/react'
import Checkbox from '../components/checkbox'
import Link from 'next/link'

const mdComponents = {
  input: props => <Checkbox />,
}

const AppContainer = ({ children }) => {
  return (
    <Fragment>
      <div>
        <Link href='/'><a>All Recipes</a></Link>
        {children}
      </div>
      <style jsx>{`
        div {
          padding: 2em;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
          letter-spacing: 0.02em;
        }
        li {
          line-height: 1.6em;
          list-style: none;
          margin-left: -1.6em;
        }
        p > img {
          vertical-align: middle;
          margin: 0 .2em .2em .2em;
        }
      `}</style>
    </Fragment>
  )
}

export default ({Component, pageProps}) => (
  <MDXProvider components={mdComponents}>
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  </MDXProvider>
)