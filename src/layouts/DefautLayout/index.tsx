import {Outlet} from 'react-router-dom'
import { Header } from '../../components/Header/index.tsx'
import { LayoutContainer } from './styles.tsx'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}