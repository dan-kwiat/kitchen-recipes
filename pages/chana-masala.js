import { useState } from 'react'
import HorizontalScroll from 'react-horizontal'
import Badges from '../components/badges'
import Pills from '../components/pills'
import { Ingredients, Method } from '../components/chana-masala'

const SECTIONS = [
  { id: 'ingredients', label: 'Ingredients', component: Ingredients },
  { id: 'method', label: 'Method', component: Method },
]

export default () => {
  const [selected, setSelected] = useState('ingredients')
  return (
    <div>
      <h1>Chana Masala</h1>
      <Badges
        quantity='4 servings'
        time='45m'
      />
      <div className='hidden lg:block'>
        <Pills
          items={SECTIONS}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <HorizontalScroll
        className='w-full m-0 p-0'
        selected={-1}
        growthFactor={0}
        renderButtonLeft={props => {
          return (
            <button className={`lg:hidden absolute top-0 left-0 p-2 focus:outline-none ${props.disabled ? 'opacity-25 cursor-not-allowed' : 'breathe-opacity'}`} {...props}>
              <svg className={`fill-current text-teal-500 ${props.disabled ? '' : 'hover:text-teal-700'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
            </button>
          )
        }}
        renderButtonRight={props => {
          return (
            <button className={`lg:hidden absolute top-0 right-0 p-2 focus:outline-none ${props.disabled ? 'opacity-25 cursor-not-allowed' : 'breathe-opacity'}`} {...props}>
              <svg className={`fill-current text-teal-500 ${props.disabled ? '' : 'hover:text-teal-700'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </button>
          )
        }}
        buttonScrollPercent={100}
        snap={(x, velocity, selected) => {
          return Math.round((x + velocity*150)/100)*100
        }}
        mouseDrag={false}
        touchDrag={true}
      >
        {SECTIONS.map(x => {
          const Component = x.component
          return (
            <div
              key={x.id}
              className={`overflow-visible w-full inline-block align-top lg:block whitespace-normal leading-10 ${selected === x.id ? '' : 'lg:hidden'}`}
            >
              <div className='lg:hidden text-center block py-2 px-3'>
                {x.label.toUpperCase()}
              </div>
              <Component />
            </div>
          )
        })}
      </HorizontalScroll>
    </div>
  )
}
