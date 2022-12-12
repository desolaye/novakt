import { SECTIONS_DATA } from '@/data'

export const Sections = () => {
  return (
    <section className="overflow-x-auto bg-x-white text-x-gray whitespace-nowrap hide-scroll">
      <div className='flex justify-evenly'>
      {SECTIONS_DATA.map((e, i) => (
        <div
          key={i}
          className="inline-block mx-2 py-4 px-2 cursor-pointer hover:text-x-red transition-all border-b-2 border-x-white hover:border-x-red"
        >
          {e.title}
        </div>
      ))}
      </div>
    </section>
  )
}
