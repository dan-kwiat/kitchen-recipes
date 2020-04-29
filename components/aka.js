import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '@rmwc/tooltip'
import { DeviceContext } from '../context'

const Aka = ({ terms }) => {
  const { touch } = useContext(DeviceContext)
  return (
    <Tooltip
      className='text-base'
      content={
        <ul className='p-2 max-w-xs'>
          {terms.slice(1).map((x, i) => (
            <li key={i} className={(i === terms.length - 2) ? '' : 'pb-2'}>
              {x}
            </li>
          ))}
        </ul>
      }
      activateOn={touch ? 'click' : 'hover'}
    >
      <span
        className={`py-1 font-semibold border-b-2 border-yellow-500 hover:bg-yellow-500 transition-colors duration-300`}
      >
        {terms[0]}
      </span>
    </Tooltip>
  )
}
Aka.propTypes = {
  terms: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
}

export default Aka
