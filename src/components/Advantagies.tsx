import { Icon24ArrowRightOutline } from '@vkontakte/icons'
import { ADVANTAGE_DATA, ADVANTAGE_DATA_2 } from '@/data'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'
import { toValidText } from '@/utils'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
}

export const Advantangies = () => {
  return (
    <>
      <div className="max-w-7xl px-4 mx-auto">
        <Carousel responsive={responsive} infinite={true}>
          {ADVANTAGE_DATA.map((e, i) => (
            <div
              key={i}
              className="grid grid-cols-3 gap-4 justify-evenly bg-gradient-to-br from-x-gray to-slate-800 text-zinc-300 rounded-md shadow-xl mx-4 p-6 h-full"
            >
              <div className="flex flex-col gap-2 items-center self-center">
                <img src={e.img} alt="fire" />
                <p className="text-center font-bold text-lg">{e.title}</p>
              </div>
              <div className="flex col-span-2 flex-col gap-2 self-center">
                {toValidText(e.description)}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="grid grid-rows-2 py-8 gap-12 place-items-center">
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
    </>
  )
}
