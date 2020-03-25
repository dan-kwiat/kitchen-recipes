import {Fragment, useRef, useState} from 'react'
import MenuSurface, {Corner} from '@material/react-menu-surface'

const Aka = ({ children, terms }) => {
  const [open, setOpen] = useState(false)
  const containerElement = useRef(null)
  return (
    <Fragment>
      <span
        className='font-semibold border-b-4 border-dotted border-gray-400'
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
        <ul className='p-4 max-w-xs'>
          {terms.map((x, i) => (
            <li key={i} className={i < terms.length-1 ? 'pb-2' : ''}>{x}</li>
          ))}
        </ul>
      </MenuSurface>
    </Fragment>
  )
}

export default Aka
