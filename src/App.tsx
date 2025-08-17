import './App.css'
import IntroSection from './features/intro/IntroSection'
import Navbar from './features/header/Header'
import ProjectSection from './features/projects/ProjectSection'

function App() {
  return (
    <div className="w-3/4 mx-auto">
      <Navbar></Navbar>
      <IntroSection></IntroSection>
      <ProjectSection></ProjectSection>
    </div>
  )
}

export default App
