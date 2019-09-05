import {Fragment} from 'react'
import {MDXProvider} from '@mdx-js/react'
import Checkbox from '@material/react-checkbox'
import Nav from '../components/nav'
import '../index.scss'

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
          position: relative;
          background: white;
          max-width: 800px;
          min-height: 100vh;
          box-sizing: border-box;
          padding: 100px 2em 2em 2em;
          margin: 0 auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
          letter-spacing: 0.02em;
          background: whitesmoke;
          margin: 0;
        }
        li.task-list-item {
          line-height: 40px;
          list-style: none;
          text-align: middle;
        }
        li.task-list-item .mdc-checkbox {
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