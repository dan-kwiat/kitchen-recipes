import {Fragment, useRef, useState} from 'react'
import MenuSurface, {Corner} from '@material/react-menu-surface'

const Aka = ({ children, terms }) => {
  const [open, setOpen] = useState(false)
  const containerElement = useRef(null)
  return (
    <Fragment>
      <span
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        ref={containerElement}
        style={{ background: open ? 'papayawhip' : 'inherit' }}
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
        }
        ul {
          padding-inline-start: 0px;
          padding: 0 1em;
          max-width: 300px;
        }
        li {
          list-style: none;
          line-height: 1.5em;
          margin-bottom: .5em;
        }
      `}</style>
    </Fragment>
  )
}

export default Aka
