import { SectionsType } from '@/types'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export const NavBar = ({ data }: { data: SectionsType[] }) => {
  return (
    <section className="overflow-x-auto bg-x-white text-x-gray whitespace-nowrap hide-scroll w-full">
      <div className="flex justify-evenly">
        {data.map((e, i) => (
          <>
            {e.id === 'catalog' || e.id === '' ? (
              <Link to={'/' + e.id} key={i}>
                <div className="inline-block mx-2 py-4 px-2 cursor-pointer hover:text-x-red transition-all border-b-2 border-x-white hover:border-x-red">
                  {e.title}
                </div>
              </Link>
            ) : (
              <ScrollLink key={i} to={e.id} smooth={true} duration={500}>
                <div className="inline-block mx-2 py-4 px-2 cursor-pointer hover:text-x-red transition-all border-b-2 border-x-white hover:border-x-red">
                  {e.title}
                </div>
              </ScrollLink>
            )}
          </>
        ))}
      </div>
    </section>
  )
}
