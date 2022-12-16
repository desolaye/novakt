export const toValidText = (text: string) => {
  return (
    <>
      {text.split('\n').map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </>
  )
}
