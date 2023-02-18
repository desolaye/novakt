import { MainLayout } from '@/layouts'
import { CatalogPage, MainPage, MaterialPage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <MainPage />
      </MainLayout>
    ),
  },
  {
    path: '/:id',
    element: (
      <MainLayout>
        <MaterialPage />
      </MainLayout>
    ),
  },
  {
    path: '/catalog',
    element: (
      <MainLayout>
        <CatalogPage />
      </MainLayout>
    ),
  },
])
