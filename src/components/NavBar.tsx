import { MATERIALS_DATA } from '@/data'
import { SectionsType } from '@/types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export const NavBar = ({ data }: { data: SectionsType[] }) => {
  const [isCatalogHovered, setIsCatalogHovered] = useState(false)
  const [isMenuHovered, setIsMenuHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(isCatalogHovered || isMenuHovered)
  }, [isCatalogHovered, isMenuHovered])

  return (
    <section className="bg-x-white text-x-gray overflow-x-scroll whitespace-nowrap hide-scroll w-full">
      <div className="flex justify-evenly relative w-fit lg:w-full overflow-x-scroll whitespace-nowrap hide-scroll">
        {data.map((e, i) => (
          <>
            {e.id === 'catalog' && (
              <button
                onMouseEnter={() => setIsCatalogHovered(true)}
                onMouseLeave={() => setIsCatalogHovered(false)}
              >
                <div className="inline-block mx-2 py-4 px-2 cursor-pointer hover:text-x-red transition-all border-b-2 border-x-white hover:border-x-red">
                  {e.title}
                </div>
              </button>
            )}
            {e.id === '' && (
              <Link to={'/' + e.id} key={i}>
                <div className="inline-block mx-2 py-4 px-2 cursor-pointer hover:text-x-red transition-all border-b-2 border-x-white hover:border-x-red">
                  {e.title}
                </div>
              </Link>
            )}
            {e.id === 'question' && (
              <a
                href="https://wa.me/+79137567210"
                target="_blank"
                className="inline-block mx-2 py-4 px-2 cursor-pointer hover:text-x-red transition-all border-b-2 border-x-white hover:border-x-red"
              >
                {e.title}
              </a>
            )}
            {e.id !== 'catalog' && e.id !== '' && e.id !== 'question' && (
              <ScrollLink key={i} to={e.id} smooth={true} duration={500}>
                <div className="inline-block mx-2 py-4 px-2 cursor-pointer hover:text-x-red transition-all border-b-2 border-x-white hover:border-x-red">
                  {e.title}
                </div>
              </ScrollLink>
            )}
          </>
        ))}
      </div>
      {isMenuOpen && (
        <div
          onMouseEnter={() => setIsMenuHovered(true)}
          onMouseLeave={() => setIsMenuHovered(false)}
          className="absolute top-30 left-[60%] z-30 bg-x-white w-full max-w-[375px]"
        >
          {MATERIALS_DATA.map((e) => (
            <Link to={'/' + e.id}>
              <p className="px-2 py-1 hover:bg-x-gray hover:text-x-white transition-all">
                {e.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
