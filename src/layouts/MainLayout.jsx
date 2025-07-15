import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollArrow from '../components/ScrollArrow'
import ScrollProgress from '../components/ScrollProgress'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto">
        <Outlet />  {/* This renders the nested route */}
      </main>
      <ScrollArrow />
      <ScrollProgress />
      <Footer />
    </div>
  )
}
