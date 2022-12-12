import { MATERIALS_DATA } from '@/data'

export const MaterialCards = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 max-w-7xl mx-auto px-8">
      {MATERIALS_DATA.map((e) => (
        <div className="bg-x-white">
          <div className="p-6">
            <h4 className="pb-72">{e.title}</h4>
            <p>Подробнее</p>
          </div>
        </div>
      ))}
    </div>
  )
}
