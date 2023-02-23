import { MATERIALS_DATA } from '@/data'
import { Icon20ChevronRight } from '@vkontakte/icons'
import { Link } from 'react-router-dom'

export const MaterialCards = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 max-w-7xl mx-auto px-2 md:px-8">
      {MATERIALS_DATA.map((e) => (
        <Link
          key={e.id}
          to={'/' + e.id}
          className="bg-x-white grid grid-cols-2 shadow-xl rounded-sm hover:scale-95 hover:shadow-inner focus:scale-95 focus:shadow-inner transition-all h-[175px] md:h-[225px] overflow-hidden"
        >
          <div className="p-6 py-4 flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <h4 className="text-lg md:text-xl font-bold">{e.title}</h4>
              <p className='text-sm md:text-base'>{e.price}</p>
              {e.id === 'veneer' && (
                <p className="text-red-800 text-sm md:text-base">Изучаем спрос</p>
              )}
            </div>
            <button className="flex gap-2 items-center">
              <p className="md:text-lg text-base tracking-wide">Подробнее</p>
              <Icon20ChevronRight />
            </button>
          </div>
          <img src={e.img} alt="img" className="justify-self-end min-h-full" />
        </Link>
      ))}
    </div>
  )
}
