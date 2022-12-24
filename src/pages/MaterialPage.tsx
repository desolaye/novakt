import { Section } from '@/components'
import { MATERIALS_DATA } from '@/data'
import { toValidText } from '@/utils'
import { useParams } from 'react-router-dom'

export const MaterialPage = () => {
  const params = useParams()
  return (
    <>
      {MATERIALS_DATA.filter((e) => e.id === params.id).map((e) => (
        <article key={e.id} className="max-w-7xl mx-auto py-8">
          <h2 className="text-2xl font-bold">{e.title}</h2>
          <section className="grid grid-cols-2 gap-4 px-20 py-4 place-items-center">
            <div className="translate-x-20 shadow-lg">
              <img src={e.img} alt="img" />
            </div>
            <div className="p-4 bg-x-white -translate-x-20 shadow-xl rounded-sm">
              {toValidText(e.description)}
            </div>
          </section>
          <Section id="colors" title="Цветовые решения">
            <div className='grid grid-cols-2 xl:grid-cols-4 gap-8'>
              {e.colors && e.colors.map((img, i) => <img key={i} src={img} alt="img" />)}
            </div>
          </Section>
          <Section id={e.id} title="Каталог товара">
            <div></div>
          </Section>
        </article>
      ))}
    </>
  )
}
