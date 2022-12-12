import { ReactElement } from 'react'

export const Section = ({
  title,
  secondary,
  children,
}: {
  title: string
  secondary?: boolean
  children?: ReactElement
}) => {
    const wrapperStyle = secondary ? 'bg-x-gray' : ''
  return (
    <div className={`pb-4 ${wrapperStyle}`}>
      <div className="bg-x-red mb-4 py-2">
        <h3 className='text-white text-xl text-center'>{title}</h3>
      </div>
      {children}
    </div>
  )
}
