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
        <div className="flex gap-2">
          <WhatsAppIcon className="self-center w-full" />
          <EmailIcon className="self-center w-full" />
        </div>
        <div className="p-2">+ 7 (967) 500-04-65</div>
      </section>
    </header>
  )
}
