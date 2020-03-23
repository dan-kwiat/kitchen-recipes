import {Fragment} from 'react'
import {MDXProvider} from '@mdx-js/react'
import Checkbox from '@material/react-checkbox'
import Nav from '../components/nav'
import '@material/react-checkbox/dist/checkbox.css'
import '@material/react-menu-surface/dist/menu-surface.css'

const mdComponents = {
  input: props => (
    <div className='list-checkbox-container'>
      <Checkbox />
    </div>
  )
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
        li.task-list-item .list-checkbox-container {
          display: inline-block;
          width: 40px;
          height: 40px;
          margin-left: -40px;
          margin-right: -4px; // to remove the space after inline-block element
        }
        a {
          color: rgba(0,0,0,.8);
        }
        a:hover {
          color: rgba(0,0,0,1);
        }
        hr {
          border: 1px solid whitesmoke;
          border-radius: 0px;
        }
        h4 {
          color: rgba(0,0,0,.6);
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