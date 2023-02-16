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
          <section className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap md:gap-4 px-2 md:px-20 py-4 place-items-center">
            <div className="shadow-lg">
              <img src={e.img} alt="img" className='w-96 md:w-full' />
            </div>
            <div className="p-4 shadow-xl flex flex-col bg-zinc-300 rounded-md gap-2 h-full justify-center">
              {toValidText(e.description)}
            </div>
          </section>
          {e.moreDescription && (
            <Section id="moreDescription" title="Полное описание">
              <div className="text-lg px-4 flex flex-col gap-1">
                {toValidText(e.moreDescription)}
              </div>
            </Section>
          )}

          <Section id="colors" title="Цветовые решения">
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
              {e.colors &&
                e.colors.map((e, i) => (
                  <div className="flex flex-col gap-2 items-center">
                    <img key={i} src={e.img} alt="img" className="h-full" />
                    <p>{e.name}</p>
                  </div>
                ))}
            </div>
          </Section>
          <Section id={e.id} title="Каталог товара" className="px-4">
            <embed src={e.file} type="application/pdf" width="100%" height="600px" />
          </Section>
        </article>
      ))}
    </>
  )
}
