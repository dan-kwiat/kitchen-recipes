import { MDXProvider } from "@mdx-js/react"

import { useDevice } from "../hooks"
import { DeviceContext } from "../context"
import "@rmwc/tooltip/tooltip.css"
import "../index.css"
import "../custom-base.css"
import "../custom-utilities.css"

const LabelledCheckbox = ({ label }) => {
  return (
    <label className="flex items-center cursor-pointer no-tap-highlight">
      <input
        type="checkbox"
        className="form-checkbox bg-white text-gray-900 border-gray-400 focus:border-gray-900 cursor-pointer"
      />
      <span className="task-text ml-2 text-gray-700">{label}</span>
    </label>
  )
}

const mdComponents = {
  li: (props) => {
    return (
      <li className="list-none">
        <LabelledCheckbox label={props.children} />
      </li>
    )
  },
}

const AppContainer = ({ children }) => {
  return (
    <div className="relative max-w-screen-md min-h-screen box-border pb-4 pt-12 my-0 mx-auto">
      {children}
      {/* <Nav /> */}
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
