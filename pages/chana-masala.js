import Badges from '../components/badges'
import Sections from '../components/sections'
import { Ingredients, Method } from '../recipes/chana-masala'

const SECTIONS = [
  { name: 'Ingredients', component: <Ingredients/> },
  { name: 'Method', component: <Method/> },
]

export default () => {
  return (
    <div>
      <div className='p-3'>
        <h1>Chana Masala</h1>
        <Badges
          quantity='4 servings'
          time='45m'
        />
      </div>
      <hr />
      <Sections
        items={SECTIONS}
      />
    </div>
  )
}
