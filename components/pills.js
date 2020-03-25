import PropTypes from 'prop-types'

const Pill = ({ primary, onClick, children }) => {
  const dynamicClassNames = primary ? (
    'border-teal-500 bg-teal-500 text-white'
  ) : (
    'border-white hover:border-gray-200 text-teal-500 hover:bg-gray-200'
  )
  return (
    <span
      className={`text-center block border rounded py-2 px-3 cursor-pointer ${dynamicClassNames}`}
      onClick={onClick}
      children={children}
    />
  )
}
Pill.propTypes = {
  primary: PropTypes.bool,
  onClick: PropTypes.func,
}

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
