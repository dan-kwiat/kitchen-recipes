import PropTypes from 'prop-types'

const Pill = ({ primary, onClick, children, className }) => {
  const dynamicClassNames = primary ? (
    'border-teal-500 bg-teal-500 text-white'
  ) : (
    'border-white hover:border-gray-200 text-teal-500 hover:bg-gray-200'
  )
  return (
    <button
      className={`text-center block border rounded py-2 px-3 cursor-pointer ${dynamicClassNames} ${className || ''}`}
      onClick={onClick}
      children={children}
    />
  )
}
Pill.propTypes = {
  primary: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Pill
