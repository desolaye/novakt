import { SECTIONS_DATA } from '@/data'
import { Link as ScrollLink } from 'react-scroll'

export const NavBar = () => {
  return (
    <section className="overflow-x-auto bg-x-white text-x-gray whitespace-nowrap hide-scroll w-full">
      <div className="flex justify-evenly">
        {SECTIONS_DATA.map((e, i) => (
          <ScrollLink to={e.id} smooth={true} duration={500}>
            <div
              key={i}
              className="inline-block mx-2 py-4 px-2 cursor-pointer hover:text-x-red transition-all border-b-2 border-x-white hover:border-x-red"
            >
              {e.title}
            </div>
          </ScrollLink>
        ))}
      </div>
    </section>
  )
}
