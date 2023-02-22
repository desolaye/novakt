type Props = {
  userName: string
  phoneNumber: string
  mailTitle: string
  mailBody: string
}

export const encodedMail = (mailInfo: Props): string => {
  const mailTitle = encodeURI(`${mailInfo.mailTitle}. ${mailInfo.userName}`)
  const mailBody = encodeURI(
    `${mailInfo.mailBody}. Телефон связи: ${mailInfo.phoneNumber}`
  )

  const subject = `?subject=${mailTitle}&body=${mailBody}`
  return subject
}
