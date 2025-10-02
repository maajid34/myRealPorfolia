
import { Route, Routes } from 'react-router-dom'
import PortfolioHero from './component/home'
import ResumeComponent from './pages/resume'
import Services from './component/service'
import About from './component/about'


function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<PortfolioHero />}  />
      <Route path='/resume' element={<ResumeComponent />}  />
      <Route path='/Services' element={<Services />}  />
      <Route path='/About' element={<About />}  />
    </Routes>
    </>
  )
}

export default App
