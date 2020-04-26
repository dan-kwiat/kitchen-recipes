import { useContext, useRef } from 'react'
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
  const selectedIndex = useRef(0)
  const { md } = useContext(DeviceContext)

  const [springStyles, setSpringStyles] = useSpring(() => ({
    translatePctPx: [0, 0],
    indexImmediate: 0,
    leftButtonDisplay: 'none',
    rightButtonDisplay: 'block',
    immediate: key => key === 'indexImmediate'
  }))

  // Handle left/right dragging
  const bind = useDrag(({ tap, swipe, last, movement }) => {
    if (tap) return
    const index = swipe[0] ? Math.min(
      Math.max(
        selectedIndex.current - swipe[0],
        0
      ),
      items.length - 1
    ) : selectedIndex.current

    setSpringStyles({
      translatePctPx: [
        -100*index, // %
        last ? 0 : movement[0] // px
      ],
      indexImmediate: index,
      leftButtonDisplay: index > 0 ? 'block' : 'none',
      rightButtonDisplay: index < items.length -1 ? 'block' : 'none',
      immediate: key => !last || key === 'indexImmediate',
    })

    selectedIndex.current = index
  }, { axis: 'x' })


  return (
    <animated.div {...bind()} className='relative w-full overflow-hidden'>
      <animated.div
        style={{
          transform: md ? undefined : (
            springStyles.translatePctPx.interpolate((pct, px) => `translateX(${px*PILL_WIDTH/window.innerWidth + PILL_WIDTH*(0.01*pct - 0.5)}px)`)
          ),
        }}
      >
        <AnimatedPills
          labels={items.map(x => x.name)}
          onSelect={i => {
            selectedIndex.current = i
            setSpringStyles({
              translatePctPx: [-100*i, 0],
              indexImmediate: i,
              leftButtonDisplay: i > 0 ? 'block' : 'none',
              rightButtonDisplay: i < items.length -1 ? 'block' : 'none',
            })
          }}
          className='transform translate-x-1/2 md:translate-x-0'
          selectedIndex={springStyles.indexImmediate}
        />
      </animated.div>
      <animated.div
        className='relative whitespace-no-wrap'
        style={{
          transform: springStyles.translatePctPx.interpolate((pct, px) => `translateX(calc(${px}px + ${pct}%))`)
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
      <animated.button
        className={`absolute top-0 left-0 h-12 w-24 fading-left-light`}
        style={{ display: md ? 'none' : springStyles.leftButtonDisplay }}
        onClick={() => {
          const i = Math.max(selectedIndex.current - 1, 0)
          selectedIndex.current = i
          setSpringStyles({
            translatePctPx: [-100*i, 0],
            indexImmediate: i,
            leftButtonDisplay: i > 0 ? 'block' : 'none',
            rightButtonDisplay: i < items.length -1 ? 'block' : 'none',
          })
        }}
      >
        <svg className={`fill-current text-teal-500 hover:text-teal-700 breathe-opacity right`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
      </animated.button>
      <animated.button
        className={`absolute top-0 right-0 h-12 w-24 fading-right-light`}
        style={{ display: md ? 'none' : springStyles.rightButtonDisplay }}
        onClick={() => {
          const i = Math.min(selectedIndex.current + 1, items.length - 1)
          selectedIndex.current = i
          setSpringStyles({
            translatePctPx: [-100*i, 0],
            indexImmediate: i,
            leftButtonDisplay: i > 0 ? 'block' : 'none',
            rightButtonDisplay: i < items.length -1 ? 'block' : 'none',
          })
        }}
      >
        <svg className={`float-right fill-current text-teal-500 hover:text-teal-700 breathe-opacity left`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
      </animated.button>
    </animated.div>
  )
}
Sections.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.elementType.isRequired,
  })).isRequired,
}

export default Sections
