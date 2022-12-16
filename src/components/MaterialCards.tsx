import { MATERIALS_DATA } from '@/data'
import { Icon20ChevronRight } from '@vkontakte/icons'
import { Link } from 'react-router-dom'

export const MaterialCards = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 max-w-7xl mx-auto px-8">
      {MATERIALS_DATA.map((e) => (
        <Link key={e.id} to={e.id}>
          <div className="bg-x-white flex justify-between">
            <div className="p-6">
              <h4 className="pb-72 text-xl font-bold">{e.title}</h4>
              <button className="flex gap-2 items-center">
                <p className="text-lg tracking-wide">Подробнее</p>
                <Icon20ChevronRight />
              </button>
            </div>
            <img src="" alt="img" />
          </div>
        </Link>
      ))}
    </div>
  )
}
