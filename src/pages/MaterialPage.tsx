import { Section } from '@/components'
import { MATERIALS_DATA } from '@/data'
import { useParams } from 'react-router-dom'

export const MaterialPage = () => {
  const params = useParams()
  return (
    <>
      {MATERIALS_DATA.filter((e) => e.id === params.id).map((e) => (
        <article key={e.id} className="max-w-7xl mx-auto py-8">
          <h2 className="text-2xl font-bold">{e.title}</h2>
          <section>
            <div>
              <img src={e.img} alt="img" />
            </div>
            <div>
              <p>{e.description}</p>
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
