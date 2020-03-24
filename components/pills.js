import PropTypes from 'prop-types'

const Pills = ({ items, selected, setSelected }) => {
  return (
    <ul className="flex">
      {items.map(x => {
        const dynamicClassNames = selected === x.id ? (
          'border-blue-500 bg-blue-500 text-white'
        ) : (
          'border-white hover:border-gray-200 text-blue-500 hover:bg-gray-200'
        )
        return (
          <li key={x.id} className="mr-3">
            <span
              className={`inline-block border rounded py-1 px-3 cursor-pointer ${dynamicClassNames}`}
              onClick={() => setSelected(x.id)}
            >
              {x.label}
            </span>
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