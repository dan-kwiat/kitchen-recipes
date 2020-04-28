import { Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { useDevice } from '../hooks'
import { DeviceContext } from '../context'
import Checkbox from '@material/react-checkbox'
import Nav from '../components/nav'
// import 'react-horizontal/es/index.css'
import '@material/react-checkbox/dist/checkbox.css'
import '@rmwc/tooltip/tooltip.css'
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
    <div className='relative max-w-screen-md min-h-screen box-border pb-4 pt-24 my-0 mx-auto'>
      {children}
      <Nav />
    </div>
  )
}

export default ({ Component, pageProps }) => {
  const device = useDevice()
  return (
    <MDXProvider components={mdComponents}>
      <DeviceContext.Provider value={device}>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </DeviceContext.Provider>
    </MDXProvider>
  )
}
