import {Fragment} from 'react'
import {MDXProvider} from '@mdx-js/react'
import Checkbox from '../components/checkbox'
import Nav from '../components/nav'

const mdComponents = {
  input: props => <Checkbox />,
}

const AppContainer = ({ children }) => {
  return (
    <Fragment>
      <div>
        <Nav />
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
        a {
          color: rgba(0,0,0,.8);
          text-decoration: none;
        }
        a:hover {
          color: rgba(0,0,0,1);
          text-decoration: underline;
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