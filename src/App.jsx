import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout'
import SplashCursor from './components/common/SplashCursor'
import About from './pages/About'
import Contact from './pages/Contact'
import Entry from './pages/Entry'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import WorkDetail from './pages/WorkDetail'
import Works from './pages/Works'
import { AccessProvider, useAccess } from './utils/access-context'

function AppRoutes() {
  const { unlocked } = useAccess()

  if (!unlocked) {
    return (
      <Routes>
        <Route path="*" element={<Entry />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:workId" element={<WorkDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects/:projectId" element={<Navigate to="/works" replace />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AccessProvider>
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#2b59a4"
        />
        <AppRoutes />
      </AccessProvider>
    </BrowserRouter>
  )
}
