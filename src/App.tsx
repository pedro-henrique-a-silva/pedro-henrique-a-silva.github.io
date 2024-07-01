import { useState } from 'react'
import About from './components/AboutSection'
import HeaderSection from './components/HeaderSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import { FoldWrapper } from './components/ui/foldWrapper'
import data from './data/data'
import GlobalStyles from './styles/global-styles'


function App() {
  const [projects, setProjects] = useState(data)
  return (
    <>
      <GlobalStyles />
      <HeaderSection/>
      <About />
      <FoldWrapper>
        <SkillsSection/>
      </FoldWrapper>
      <ProjectsSection projects={projects} />
    </>

  )
}

export default App
