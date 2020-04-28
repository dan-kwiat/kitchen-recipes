import { Tooltip } from '@rmwc/tooltip'

const Aka = ({ children, terms }) => {
  return (
    <Tooltip
      className='text-base'
      content={
        <ul className='p-2 max-w-xs'>
          {terms.map((x, i) => (
            <li key={i} className={i < terms.length-1 ? 'pb-2' : ''}>{x}</li>
          ))}
        </ul>
      }
    >
      <span
        className={`p-1 font-semibold border-b-2 border-yellow-500 hover:bg-yellow-500`}
      >
        {children}
      </span>
    </Tooltip>
  )
}

export default Aka
