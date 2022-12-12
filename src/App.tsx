import { BackForm, ContactInfo, MaterialCards, Section, Sections } from './components'
import house from '@/assets/images/dom_2.jpg'

export const App = () => {
  return (
    <>
      <Sections />
      <section className="h-[50vh] relative">
        <h2 className="absolute select-none z-10 text-white top-8 left-8 text-center text-3xl">
          Производим современные отделочные материалы
          <br /> по гибким ценам
        </h2>
        <img className="h-full w-full object-cover" src={house} alt="Home" />
        <div className="absolute h-full w-full bg-x-gray top-0 left-0 opacity-40" />
      </section>
      <Section title="Мы производим">
        <MaterialCards />
      </Section>
      <Section secondary title="Контакты">
        <>
          <ContactInfo />
          <BackForm />
        </>
      </Section>
    </>
  )
}
