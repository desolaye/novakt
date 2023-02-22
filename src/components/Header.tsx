import { WhatsAppIcon, EmailIcon, TelegramIcon } from '@/assets/icons'
import logo from '@/assets/images/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="py-4 flex justify-evenly gap-4 bg-x-gray text-white place-items-center">
      <section>
        <Link to={'/'} className="hidden md:block">
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
          <a href="https://wa.me/+79137567210" target="_blank" className="w-full">
            <WhatsAppIcon />
          </a>
          <a href="mailto:info@novakdecor-nsk.ru" className="w-full">
            <EmailIcon />
          </a>
          <a href="https://t.me/NOVAKDECORNSK" className="w-full">
            <TelegramIcon fill="#fff" className="w-[24px] h-[24px]" />
          </a>
        </div>
        <a href="tel:+79137567210" className="p-2">
          +7 (913) 756-72-10
        </a>
      </section>
    </header>
  )
}
