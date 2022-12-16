import {
  Icon24UserOutline,
  Icon24PhoneOutline,
  Icon24MailOutline,
  Icon24QuestionOutline,
} from '@vkontakte/icons'
import { Icon24ArrowRightOutline } from '@vkontakte/icons'

export const BackForm = () => {
  return (
    <div className="bg-x-red text-white px-8">
      <div className="max-w-7xl mx-auto py-12 flex flex-col gap-4">
        <h5 className="text-center text-2xl uppercase font-bold">Появились вопросы?</h5>
        <div className="flex gap-4 w-full">
          <Icon24UserOutline className="self-center" />
          <input type="text" placeholder="Ваше имя" />
        </div>
        <div className="flex gap-4 w-full">
          <Icon24PhoneOutline className="self-center" />
          <input type="text" placeholder="+7 (123) 456-78-90" />
        </div>
        <div className="flex gap-4 w-full">
          <Icon24MailOutline className="self-center" />
          <input type="text" placeholder="example@mail.com" />
        </div>
        <div className="flex gap-4 w-full">
          <Icon24QuestionOutline className="mt-2" />
          <textarea placeholder="Ваш вопрос..." />
        </div>
        <div className="text-center  ml-10 ">
          <button className="py-2 flex gap-2 hover:text-x-gray hover:gap-8 transition-all">
            <p>Отправить</p>

            <Icon24ArrowRightOutline className="self-center" />
          </button>
        </div>
      </div>
    </div>
  )
}
