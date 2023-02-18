import { MaterialCards, NavBar } from '@/components'
import { MATERIALS_NAV_DATA } from '@/data'

export const CatalogPage = () => {
  return (
    <>
      <NavBar data={MATERIALS_NAV_DATA} />
      <article className="mx-auto max-w-7xl py-2">
        <header className="py-4">
          <h2 className="text-2xl font-bold">Каталог товаров</h2>
        </header>
        <main>
          <MaterialCards />
        </main>
      </article>
    </>
  )
}
