import {
  Icon24LocationMapOutline,
  Icon24MailOutline,
  Icon24PhoneOutline,
} from '@vkontakte/icons'

import map from '@/assets/images/map.png'

export const ContactInfo = () => {
  return (
    <div className="text-x-white pb-8 flex flex-col lg:flex-row justify-center align-middle lg:justify-evenly gap-4">
      <div>
        <div className="flex justify-center">
          <img src={map} alt="map" />
        </div>
      </div>
      <div className="self-center">
        <p>Свяжитесь с нами удобным для Вас способом, будем рады сотрудничеству!</p>
        <div className="h-1 w-1/4 bg-x-red my-4" />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Icon24PhoneOutline />
            <div>
              <p>Звоните по номеру:</p>
              <p>+ 7 (967) 500-04-65</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon24LocationMapOutline />
            <div>
              <p>Мы находимся по адресу:</p>
              <p>г. Саратов, ул. Усть-Курдюмская, д. 12</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon24MailOutline />
            <div>
              <p>Для писем и предложений</p>
              <p>example@mail.ru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
