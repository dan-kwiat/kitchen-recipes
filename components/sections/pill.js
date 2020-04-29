import PropTypes from 'prop-types'

const Pill = ({ primary, onClick, children, className }) => {
  const dynamicClassName = primary ? (
    'md:bg-gray-700 md:text-white'
  ) : (
    'md:hover:bg-gray-300 text-gray-400 md:text-gray-600'
  )
  return (
    <button
      className={`text-xl font-semibold uppercase tracking-wider focus:outline-none no-tap-highlight py-2 px-3 rounded transition-colors duration-300 ${dynamicClassName} ${className || ''}`}
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
