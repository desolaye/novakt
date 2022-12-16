import {
  Icon28ChecksOutline,
  Icon28CheckShieldOutline,
  Icon28ThumbsUpOutline,
  Icon28DocumentListOutline,
} from '@vkontakte/icons'

import fire from '@/assets/images/fire.png'
import clean from '@/assets/images/clean.png'
import sun from '@/assets/images/sun.png'
import crack from '@/assets/images/crack.png'

export const ADVANTAGE_DATA = [
  {
    title: 'Не горит, устойчив к перепаду t',
    img: fire,
  },
  {
    title: 'Легко моется, не впитывает влагу',
    img: clean,
  },
  {
    title: 'Устойчив к выцветанию',
    img: sun,
  },
  {
    title: 'Не трескается, высокопрочный',
    img: crack,
  },
]

export const ADVANTAGE_DATA_2 = [
  {
    title: 'Доступность',
    subtitle:
      'выгодные цены, принимаем наличный и безналичный расчет, предоставляем бесплатные образцы изделий',
    icon: Icon28ChecksOutline,
  },
  {
    title: 'Гарантия 12 месяцев',
    subtitle:
      'закреплена в договоре, срок эксплуатации до 25 лет, возможен монтаж готовой продукции',
    icon: Icon28CheckShieldOutline,
  },
  {
    title: 'Стандарты качества',
    subtitle:
      'все материалы производим вручную, на продукцию предоставляем сертификаты соответствия',
    icon: Icon28ThumbsUpOutline,
  },
  {
    title: 'Более 30 видов рисунков',
    subtitle: 'можно подобрать любой цвет и рисунок, который подойдет под ваш интерьер',
    icon: Icon28DocumentListOutline,
  },
]
