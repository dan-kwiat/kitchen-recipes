import Badges from '../components/badges'
import Sections from '../components/sections'
import sectionItems from '../recipes/sourdough-crisp-bread'

export default () => {
  return (
    <div>
      <div className='p-3'>
        <h1>Sourdough Crisp Bread</h1>
        <Badges
          quantity='60 pieces'
          time='30m work, 1.5h total'
          cost='0.005 / piece'
        />
      </div>
      <hr />
      <Sections
        items={sectionItems}
      />
    </div>
  )
}
