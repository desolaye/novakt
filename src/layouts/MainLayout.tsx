import { ReactElement } from 'react'
import { Footer, Header } from '@/components'

export const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <article>
      <Header />
      <main>{children}</main>
      <Footer />
    </article>
  )
}
