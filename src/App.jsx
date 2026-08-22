import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import WorkDetail from './pages/WorkDetail'
import Works from './pages/Works'

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
