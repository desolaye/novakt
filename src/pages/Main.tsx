import Carousel from 'react-multi-carousel'
import {
  Advantangies,
  BackForm,
  ContactInfo,
  MaterialCards,
  Section,
  NavBar,
} from '@/components'

import { GALLERY_DATA, SECTIONS_DATA, VARIANTS_DATA } from '@/data'

import house1 from '@/assets/images/dom1.jpg'
import house2 from '@/assets/images/dom2.jpg'
import house3 from '@/assets/images/dom3.jpg'

import variants from '@/assets/images/variants.png'
import variants2 from '@/assets/images/variants2.jpg'

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

export const MainPage = () => {
  return (
    <>
      <NavBar data={SECTIONS_DATA} />
      <section className="h-[50vh] relative">
        <div className="flex w-full h-full items-center justify-center absolute">
          <h2 className="select-none z-10 text-white  text-center text-xl md:text-3xl">
            Производим современные отделочные материалы
            <br /> по гибким ценам
          </h2>
        </div>
        <div className="flex overflow-hidden h-full">
          <img className="h-full w-full object-cover" src={house1} alt="home" />
          <img className="h-full w-full object-cover" src={house2} alt="home" />
          <img
            className="hidden xl:block h-full w-full object-cover"
            src={house3}
            alt="home"
          />
        </div>
        <div className="absolute h-full w-full bg-x-gray top-0 left-0 opacity-70" />
      </section>
      <Section id="weDo" title="Мы производим">
        <MaterialCards />
      </Section>
      <Section id="photos" title="Фото галерея">
        <div className="relative max-w-7xl mx-auto">
          <Carousel slidesToSlide={1} responsive={responsive} infinite={true}>
            {GALLERY_DATA.map((e, i) => (
              <img
                className="w-80 h-64 xl:w-[600px] xl:h-[400px] mx-auto rounded shadow-sm"
                key={i}
                src={e}
                alt="gallery"
              />
            ))}
          </Carousel>
        </div>
      </Section>
      <Section id="advantage" title="Преимущество материалов">
        <Advantangies />
      </Section>
      <Section id="variants" title="Варианты применения">
        <>
          <div className="grid place-items-center xl:grid-cols-2 gap-2 mx-auto max-w-7xl px-2">
            <img src={variants} alt="variants" />
            <img src={variants2} alt="variants2" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 pt-8">
            {VARIANTS_DATA.map((e, i) => (
              <div
                key={i}
                className={`flex flex-col justify-start items-center gap-6 ${
                  i > 2 && 'hidden'
                }`}
              >
                {e.Icon}
                <p>{e.text}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 place-items-center gap-8 max-w-3xl mx-auto px-4 py-12">
            {VARIANTS_DATA.map((e, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-6 ${i < 3 && 'hidden'}`}
              >
                {e.Icon}
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </>
      </Section>
      <Section id="contacts" secondary title="Контакты">
        <>
          <ContactInfo />
          <BackForm />
        </>
      </Section>
    </>
  )
}
