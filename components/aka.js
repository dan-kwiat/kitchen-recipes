import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '@rmwc/tooltip'
import { DeviceContext } from '../context'

const Aka = ({ children, terms }) => {
  const { touch } = useContext(DeviceContext)
  const isString = typeof terms === 'string'
  return (
    <Tooltip
      className='text-base'
      content={
        <ul className='p-2 max-w-xs'>
          {(isString ? [terms] : terms).map((x, i) => (
            <li key={i} className={(isString || i === terms.length - 1) ? '' : 'pb-2'}>{x}</li>
          ))}
        </ul>
      }
      activateOn={touch ? 'click' : 'hover'}
    >
      <span
        className={`py-1 font-semibold border-b-2 border-yellow-500 hover:bg-yellow-500 transition-colors duration-300`}
      >
        {children}
      </span>
    </Tooltip>
  )
}
Aka.propTypes = {
  terms: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
}

export default Aka
