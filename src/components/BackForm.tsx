import { useState } from 'react'
import {
  Icon24UserOutline,
  Icon24PhoneOutline,
  Icon24MailOutline,
  Icon24QuestionOutline,
} from '@vkontakte/icons'
import { Icon24ArrowRightOutline } from '@vkontakte/icons'

import { encodedMail } from '@/utils/encodedMail'

export const BackForm = () => {
  const [mailInfo, setMailInfo] = useState({
    userName: '',
    phoneNumber: '',
    mailTitle: '',
    mailBody: '',
  })

  const checkInfo = (e: any) => {
    setMailInfo((old) => ({ ...old, [e.target.name]: e.target.value }))
  }

  return (
    <form className="bg-x-red text-white px-8">
      <div className="max-w-7xl mx-auto py-12 flex flex-col gap-4">
        <h5 className="text-center text-2xl uppercase font-bold">Появились вопросы?</h5>
        <div className="flex gap-4 w-full">
          <Icon24UserOutline className="self-center" />
          <input
            onChange={checkInfo}
            name="userName"
            type="text"
            value={mailInfo.userName}
            placeholder="Ваше имя"
          />
        </div>
        <div className="flex gap-4 w-full">
          <Icon24PhoneOutline className="self-center" />
          <input
            onChange={checkInfo}
            name="phoneNumber"
            type="text"
            value={mailInfo.phoneNumber}
            placeholder="+7 (123) 456-78-90"
          />
        </div>
        <div className="flex gap-4 w-full">
          <Icon24MailOutline className="self-center" />
          <input
            onChange={checkInfo}
            name="mailTitle"
            type="text"
            value={mailInfo.mailTitle}
            placeholder="Заголовок письма"
          />
        </div>
        <div className="flex gap-4 w-full">
          <Icon24QuestionOutline className="mt-2" />
          <textarea
            value={mailInfo.mailBody}
            onChange={checkInfo}
            name="mailBody"
            placeholder="Ваш вопрос..."
          />
        </div>
        <div className="text-center ml-10">
          <a
            href={`mailto:info@novakdecor-nsk.ru${encodedMail(mailInfo)}`}
            className="py-2 flex gap-2 hover:text-x-gray hover:gap-8 transition-all"
          >
            <p>Отправить</p>
            <Icon24ArrowRightOutline className="self-center" />
          </a>
        </div>
      </div>
    </form>
  )
}
