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
          <section className='grid grid-cols-2 gap-4 bg-x-white px-20 py-4 place-items-center'>
            <div>
              <img src={e.img} alt="img" />
            </div>
            <div className=' p-4'>
              {toValidText(e.description)}
            </div>
          </section>
          <Section id={e.id} title="Каталог товара">
            <div></div>
          </Section>
        </article>
      ))}
    </>
  )
}
