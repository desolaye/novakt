import { ADVANTAGE_DATA, ADVANTAGE_DATA_2 } from '@/data'
import { Icon24ArrowRightOutline } from '@vkontakte/icons'

export const Advantangies = () => {
  return (
    <div className="grid grid-rows-3 place-items-center">
      <div className="flex gap-4">
        {ADVANTAGE_DATA.map((e, i) => (
          <div key={i} className="flex flex-col gap-2">
            <img src={e.img} className="self-center" alt="fire" />
            <p className="self-center">{e.title}</p>
          </div>
        ))}
      </div>
      <div className="max-w-4xl bg-x-red flex flex-col justify-center gap-8 p-4">
        <p className="text-white text-xl uppercase font-bold text-center">
          Для дизайнеров, архитекторов и строителей специальные условия!
        </p>
        <button className="text-white self-end font-semibold flex gap-2 hover:gap-8 transition-all">
          <p>Узнать подробнее</p>
          <Icon24ArrowRightOutline className="self-center" />
        </button>
      </div>
      <div className="flex gap-8">
        {ADVANTAGE_DATA_2.map((e, i) => (
          <div key={i} className="flex flex-col gap-2 max-w-[220px]">
            <div className="flex gap-2">
              <e.icon className="self-center text-x-red" />
              <p className="font-bold uppercase">{e.title}</p>
            </div>
            <p className="ml-9">{e.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
