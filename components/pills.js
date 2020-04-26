import PropTypes from 'prop-types'
import Pill from './pill'

const Pills = ({ items, selected, setSelected }) => {
  return (
    <ul className="flex">
      {items.map((x, i) => {
        const marginClassName = i < items.length - 1 ? 'mr-2' : ''
        return (
          <li key={x.id} className={`flex-1 ${marginClassName}`}>
            <Pill
              primary={selected === x.id}
              onClick={() => setSelected(x.id)}
            >
              {x.label}
            </Pill>
          </li>
        )
      })}
    </ul>
  )
}
Pills.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selected: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
}

export default Pills
