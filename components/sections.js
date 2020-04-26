import { useContext } from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { DeviceContext } from '../context'
import Pill from './pill'


const Pills = ({ labels, onSelect, selectedIndex, style, className }) => {
  console.log('rendering pills')
  return (
    <div className={`md:flex whitespace-no-wrap justify-center p-1 left-50 ${className || ''}`} style={style}>
      {labels.map((x, i) => (
        <Pill
          key={x}
          className='w-40 mr-2 inline-block md:block'
          onClick={() => onSelect(i)}
          primary={i === selectedIndex}
        >
          {x}
        </Pill>
      ))}
    </div>
  )
}


const AnimatedPills = animated(Pills)
const PILL_WIDTH = 160

const Sections = ({ items }) => {
  console.log('rendering sections')
  const { md } = useContext(DeviceContext)

  const [containerStyles, setContainerStyles] = useSpring(() => ({
    index: 0,
    indexImmediate: 0,
    immediate: key => key === 'indexImmediate'
  }))


  return (
    <div className='relative w-full overflow-hidden'>
      <animated.div
        style={{
          transform: md ? undefined : (
            containerStyles.index.interpolate(x => `translateX(${-PILL_WIDTH*(0.5 + x)}px)`)
          ),
        }}
      >
        <AnimatedPills
          labels={items.map(x => x.name)}
          onSelect={i => {
            setContainerStyles({
              index: i,
              indexImmediate: i,
            })
          }}
          className='transform translate-x-1/2 md:translate-x-0'
          selectedIndex={containerStyles.indexImmediate}
        />
      </animated.div>
      <animated.div
        className='relative whitespace-no-wrap'
        style={{
          transform: containerStyles.index.interpolate(x => `translateX(${-100*x}%)`)
        }}
      >
        {items.map((x, i) => (
          <div
            key={x.name}
            className='w-full whitespace-normal align-top inline-block px-2'
          >
            {x.component}
          </div>
        ))}
      </animated.div>
    </div>
  )
}
Sections.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.elementType.isRequired,
  })).isRequired,
}

export default Sections
