import { SectionType } from '@/types'

export const Section = ({ id, title, secondary, children }: SectionType) => {
  const wrapperStyle = secondary ? 'bg-x-gray' : ''
  return (
    <section id={id} className={`pb-4 ${wrapperStyle}`}>
      <div className="bg-x-red mb-4 py-2">
        <h3 className="text-white text-xl text-center">{title}</h3>
      </div>
      {children}
    </section>
  )
}
