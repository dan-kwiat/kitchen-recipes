import { Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { useDevice } from '../hooks'
import { DeviceContext } from '../context'
import Nav from '../components/nav'
import '@rmwc/tooltip/tooltip.css'
import '../index.css'

let listItemId = 0

const mdComponents = {
  li: props => {
    console.log(props)
    listItemId++
    return (
      <div class='flex items-start mt-4'>
        <div class='flex items-center'>
          &#8203;
          <input id={listItemId} type='checkbox' class='form-checkbox border-gray-400 h-4 w-4 text-teal-500 cursor-pointer' />
        </div>
        <label for={listItemId} class='ml-3 text-gray-700 cursor-pointer'>{props.children}</label>
      </div>
    )
  }
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
