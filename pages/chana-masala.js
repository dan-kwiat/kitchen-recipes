import { useState } from 'react'
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
      <Pills
        items={SECTIONS}
        selected={selected}
        setSelected={setSelected}
      />
      {SECTIONS.map(x => {
        const Component = x.component
        return (
          <div className={selected === x.id ? null : 'hidden'}>
            <Component />
          </div>
        )
      })}
    </div>
  )
}
