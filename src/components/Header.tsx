import { WhatsAppIcon, EmailIcon } from '@/assets/icons'
import logo from '@/assets/images/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="py-4 grid grid-cols-3 gap-4 bg-x-gray text-white place-items-center">
      <section>
        <Link to={'/'}>
          <img src={logo} className="w-16 lg:w-20" />
        </Link>
      </section>
      <section>
        <h1 className="text-lg lg:text-2xl tracking-wide font-light text-center">
          Novak Decor NSK
        </h1>
      </section>
      <section className="flex flex-col-reverse lg:flex-row">
        <div className="flex items-center gap-2">
          <a href="https://wa.me/89675000465" target="_blank" className="w-full">
            <WhatsAppIcon />
          </a>
          <a href="mailto:info@novakdecor-nsk.ru" className="w-full">
            <EmailIcon />
          </a>
        </div>
        <div className="p-2">+ 7 (967) 500-04-65</div>
      </section>
    </header>
  )
}
