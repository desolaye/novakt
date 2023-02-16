import { ReactElement } from 'react'

export type SectionsType = {
  id: string
  title: string
}

export type SectionType = {
  id: string
  title: string
  secondary?: boolean
  children?: ReactElement
  className?: string
}
