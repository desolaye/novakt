import { NavBar, Section } from '@/components'
import { MATERIALS_DATA, MATERIALS_NAV_DATA } from '@/data'
import { toValidText } from '@/utils'
import { Icon24ArrowRightOutline } from '@vkontakte/icons'
import { useParams } from 'react-router-dom'
import { Document, Page } from 'react-pdf'
import { useState } from 'react'

export const MaterialPage = () => {
  const params = useParams()
  const [numPages, setNumPages] = useState<null | number>(null)
  const [pageNumber, setPageNumber] = useState(1) //setting 1 to show fisrt page

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  return (
    <>
      <NavBar data={MATERIALS_NAV_DATA} />
      {MATERIALS_DATA.filter((e) => e.id === params.id).map((e) => (
        <article key={e.id} className="max-w-7xl mx-auto py-8">
          <header className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-center">{e.title}</h2>
            {e.alert && (
              <div className="mx-auto max-w-4xl bg-x-red flex flex-col justify-center gap-4 p-4 rounded">
                <div className="text-white text-xl uppercase font-semibold flex flex-col gap-1 h-full justify-center">
                  {toValidText(e.alert)}
                </div>
                <button className="text-white self-end font-semibold flex gap-2 hover:gap-8 transition-all">
                  <p>Узнать подробнее</p>
                  <Icon24ArrowRightOutline className="self-center" />
                </button>
              </div>
            )}
          </header>
          <section className="grid md:grid-cols-2 md:grid-rows-1 gap gap-y-1 md:gap-4 px-2 md:px-20 py-4 place-items-center">
            <div className="shadow-lg">
              <img src={e.img} alt="img" className="w-96 md:w-full" />
            </div>
            <div className="p-4 shadow-xl flex flex-col bg-zinc-300 rounded-md gap-2 h-full justify-center">
              {toValidText(e.description)}
            </div>
          </section>
          {e.colors && (
            <Section id="colors" title="Цветовые решения">
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 px-2">
                {e.colors.map((e, i) => (
                  <div key={i} className="flex flex-col gap-2 items-center">
                    <img src={e.img} alt="img" className="h-[250px] w-[250px]" />
                    <p>{e.name}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}
          {e.effects && (
            <Section id="colors" title="Декоративные эффекты">
              <div className="grid xl:grid-cols-2 gap-8 px-2">
                {e.effects.map((e, i) => (
                  <div key={i} className="flex flex-col gap-2 items-center">
                    <img
                      src={e.img}
                      alt="img"
                      className="h-[325px] md:h-[500px] w-full"
                    />
                    <p>{e.id}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}
          {e.file && (
            <Section id={e.id} title="Каталог товара" className="px-4">
              <>
                <embed
                  className="hidden md:block"
                  src={e.file}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                />
                <div className="md:hidden w-full">
                  <div>
                    <p className="text-center">
                      Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </p>
                    <div className="w-full flex gap-2 py-2">
                      <button
                        className="w-full bg-x-white text-x-gray rounded"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                      >
                        Назад
                      </button>
                      <button
                        className="w-full bg-x-white text-x-gray rounded"
                        type="button"
                        disabled={pageNumber >= (numPages ? numPages : 0)}
                        onClick={nextPage}
                      >
                        Вперед
                      </button>
                    </div>
                  </div>
                  <Document
                    file={e.file}
                    options={{ workerSrc: './pdf.worker.js' }}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="max-h-[825px] overflow-y-hidden w-full overflow-x-scroll hide-scroll"
                  >
                    <Page pageNumber={pageNumber} />
                  </Document>
                </div>
              </>
            </Section>
          )}
        </article>
      ))}
    </>
  )
}
