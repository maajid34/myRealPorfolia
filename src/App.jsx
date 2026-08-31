
import { Route, Routes } from 'react-router-dom'
import PortfolioHero from './component/home'
import ResumeComponent from './pages/resume'
import Services from './component/service'
import About from './component/about'
import Projects from './component/projects'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHero />} />
      <Route path="/about" element={<About />} />
      <Route path="/About" element={<About />} />
      <Route path="/resume" element={<ResumeComponent />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/projects" element={<Projects standalone />} />
      <Route path="/Projects" element={<Projects standalone />} />
    </Routes>
  )
}

export default App
