import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToHash from './ScrollToHash'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1 pt-[88px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
