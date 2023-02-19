import { ReactElement } from 'react'
import { Footer, Header } from '@/components'
import { WhatsAppIcon } from '@/assets/icons'

export const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <article>
      <div className="hidden bg-opacity-90 fixed z-20 bottom-4 right-4 p-2">
        <div className='py-8 -rotate-90'>
          <p>Связяться</p>
        </div>
        <WhatsAppIcon className="bg-green-800 rounded-full w-full text-white" />
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
    </article>
  )
}
