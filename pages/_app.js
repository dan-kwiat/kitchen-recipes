import {Fragment} from 'react'
import {MDXProvider} from '@mdx-js/react'
import Checkbox from '@material/react-checkbox'
import Nav from '../components/nav'
import 'react-horizontal/es/index.css'
import '@material/react-checkbox/dist/checkbox.css'
import '@material/react-menu-surface/dist/menu-surface.css'
import '../index.css'

const mdComponents = {
  input: props => (
    <div className='inline-block leading-10'>
      <Checkbox />
    </div>
  )
}

const AppContainer = ({ children }) => {
  return (
    <div className='relative max-w-screen-md min-h-screen box-border px-2 lg:px-4 pb-4 pt-24 my-0 mx-auto'>
      {children}
      <Nav />
    </div>
  )
}

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  </MDXProvider>
)