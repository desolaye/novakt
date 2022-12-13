import { ADVANTAGE_DATA } from '@/data'

export const Advantangies = () => {
  return (
    <div className="grid grid-cols-2 place-items-center">
      <div className="flex flex-col gap-3 items-end">
        {ADVANTAGE_DATA.map((e, i) => (
          <div key={i} className="flex gap-2">
            <p className="self-center">{e.title}</p>
            <img src={e.img} alt="fire" />
          </div>
        ))}
      </div>
      <div className="self-center">Special for designers</div>
    </div>
  )
}
