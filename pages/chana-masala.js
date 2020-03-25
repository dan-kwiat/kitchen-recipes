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
      <div className='hidden lg:block lg:px-2'>
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
        renderButtonLeft={null}
        renderButtonRight={null}
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
            <div key={x.id} className={`overflow-visible w-full inline-block align-top lg:block lg:px-10 ${selected === x.id ? '' : 'lg:hidden'}`} >
              <div className='lg:hidden text-center block py-2 px-3 text-blue-500'>
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
