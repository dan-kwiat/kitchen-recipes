import { MDXProvider } from "@mdx-js/react"

import { useDevice } from "../hooks"
import { DeviceContext } from "../context"
import Nav from "../components/nav"
import "@rmwc/tooltip/tooltip.css"
import "../index.css"
import "../custom-base.css"
import "../custom-utilities.css"

const LabelledCheckbox = ({ label }) => {
  return (
    <label className="flex items-start cursor-pointer no-tap-highlight">
      <input
        type="checkbox"
        className="form-checkbox bg-white text-teal-500 border-gray-400 focus:border-teal-500 cursor-pointer transition-color duration-300"
        style={{ marginTop: 4 }}
      />
      <span className="task-text ml-2 text-gray-700">{label}</span>
    </label>
  )
}

const mdComponents = {
  li: (props) => {
    return (
      <li className="mb-4">
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
