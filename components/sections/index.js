import { useCallback, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { DeviceContext } from '../../context'
import Pill from './pill'

const PILL_WIDTH = 190
const PILL_CONTAINER_PADDING = 32

const Pills = ({ labels, onSelect, selectedIndex, style, className }) => {
  return (
    <div className={`whitespace-no-wrap ${className || ''}`} style={style}>
      {labels.map((label, i) => (
        <div
          key={label}
          className='inline-block px-2 text-center'
          style={{ width: PILL_WIDTH }}
        >
          <Pill
            className='w-full'
            onClick={() => onSelect(i)}
            primary={i === selectedIndex}
          >
            {label}
          </Pill>
        </div>
      ))}
    </div>
  )
}
Pills.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
}

const AnimatedPills = animated(Pills)

const Sections = ({ items }) => {
  const selectedIndex = useRef(0)
  const container = useRef(null)
  const { md, touch } = useContext(DeviceContext)

  const [springStyles, setSpringStyles] = useSpring(() => ({
    translatePctPx: [0, 0],
    indexImmediate: 0,
    leftButtonDisplay: 'none',
    rightButtonDisplay: 'block',
    immediate: key => key === 'indexImmediate'
  }))

  const spring = useCallback(({ index, drag, immediate }) => {
    const boundedIndex = Math.min(
      Math.max(index, 0),
      items.length - 1
    )
    const definedDrag = drag || 0

    setSpringStyles({
      translatePctPx: [-100*boundedIndex, definedDrag],
      indexImmediate: boundedIndex,
      leftButtonDisplay: boundedIndex > 0 ? 'block' : 'none',
      rightButtonDisplay: boundedIndex < items.length -1 ? 'block' : 'none',
      immediate: key => (immediate || key === 'indexImmediate'),
    })
    selectedIndex.current = boundedIndex
  }, [items.length])


  // Handle left/right dragging
  const bind = useDrag(({ tap, swipe, last, movement }) => {
    if (!touch || tap) return
    const diff = swipe[0] ? -swipe[0] : 0

    spring({
      index: selectedIndex.current + diff,
      drag: last ? 0 : movement[0],
      immediate: !last,
    })
  }, { axis: 'x' })


  return (
    <animated.div {...bind()} className='relative w-full overflow-hidden pan-y' ref={container}>
      <div style={{ padding: `0px ${PILL_CONTAINER_PADDING}px` }}>
        <animated.div
          style={{
            transform: typeof window === 'undefined' ? undefined : (
              springStyles.translatePctPx.interpolate((pct, px) => {
                if (!container.current) return undefined
                return (
                  `translateX(${(0.01*pct + px/container.current.clientWidth)*Math.max(0, items.length*PILL_WIDTH - (container.current.clientWidth - 2*PILL_CONTAINER_PADDING))/(items.length-1)}px)`
                )
              })
            ),
          }}
        >
          <AnimatedPills
            labels={items.map(x => x.name)}
            onSelect={index => spring({ index })}
            selectedIndex={springStyles.indexImmediate}
          />
        </animated.div>
      </div>
      <animated.div
        className='relative whitespace-no-wrap mt-4'
        style={{
          transform: springStyles.translatePctPx.interpolate((pct, px) => `translateX(calc(${px}px + ${pct}%))`)
        }}
      >
        {items.map((x, i) => (
          <div
            key={x.name}
            className='w-full whitespace-normal align-top inline-block px-3'
          >
            {x.component}
          </div>
        ))}
      </animated.div>
      <animated.button
        className={`absolute top-0 left-0 h-12 w-12 md:w-24 focus:outline-none fading-left-light`}
        style={{ display: springStyles.leftButtonDisplay }}
        onClick={() => {
          spring({ index: selectedIndex.current - 1 })
        }}
      >
        <svg className={`md:hidden fill-current text-teal-500 hover:text-teal-700 breathe-opacity right`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
        <svg className={`hidden md:block fill-current text-teal-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
      </animated.button>
      <animated.button
        className={`absolute top-0 right-0 h-12 w-12 md:w-24 focus:outline-none fading-right-light`}
        style={{ display: springStyles.rightButtonDisplay }}
        onClick={() => {
          spring({ index: selectedIndex.current + 1 })
        }}
      >
        <svg className={`md:hidden float-right fill-current text-teal-500 hover:text-teal-700 breathe-opacity left`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
        <svg className={`hidden md:block float-right fill-current text-teal-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
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
