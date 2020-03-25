const Badge = ({ icon, alt, value, children }) => {
  return (
    <div className='px-3 py-2 my-1 mr-3 inline-block bg-gray-100 rounded-full border border-gray-200'>
      <img
        className='inline-block align-top mr-2'
        src={icon}
        alt={alt}
      />
      {value}
    </div>
  )
}

const Badges = ({ quantity, time }) => {
  return (
    <div className='my-4'>
      <Badge
        icon='/static/icons/people.svg'
        alt='People Icon'
        value={quantity}
      />
      <Badge
        icon='/static/icons/clock.svg'
        alt='Clock Icon'
        value={time}
      />
    </div>
  )
}

export default Badges
