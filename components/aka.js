import {Fragment, useRef, useState} from 'react'
import MenuSurface, {Corner} from '@material/react-menu-surface'

const Aka = ({ children, terms }) => {
  const [open, setOpen] = useState(false)
  const containerElement = useRef(null)
  return (
    <Fragment>
      <span
        onClick={() => setOpen(x => !x)}
        ref={containerElement}
      >
        {children}
      </span>
      <MenuSurface
        open={open}
        anchorCorner={Corner.BOTTOM_LEFT}
        onClose={() => setOpen(false)}
        anchorElement={containerElement.current}
      >
        <ul>
          {terms.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </MenuSurface>
      <style jsx>{`
        span {
          font-weight: 500;
          text-decoration: underline;
          text-decoration-style: dotted;
          text-underline-position: under;
          cursor: pointer;
        }
        ul {
          padding-inline-start: 0px;
          padding: 0 1em;
        }
        li {
          list-style: none;
          line-height: 1.7em;
        }
      `}</style>
    </Fragment>
  )
}

export default Aka
