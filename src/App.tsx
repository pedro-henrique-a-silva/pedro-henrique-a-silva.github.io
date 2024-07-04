import About from './components/AboutSection'
import HeaderSection from './components/HeaderSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import { FoldWrapper } from './components/ui/foldWrapper'
import data from './data/data'
import GlobalStyles from './styles/global-styles'
import FooterSection from './components/FooterSection'
import { SkillsDetails, SkillsDetailsClose, SkillsDetailsWrapper, TitleDetail } from './components/ui/SkillsComponents'
import { useState } from 'react'
import skillsData from './data/skillsData'
import { skillDetailType } from './types'
import { ParagraphDetails } from './components/ui/paragraph'
import { X } from '@phosphor-icons/react'



function App() {
  const [skillDetail, setSkillDetail] = useState<skillDetailType>('');
  return (
    <>
      <GlobalStyles />
      <HeaderSection />
      <About />
      <FoldWrapper>
        <SkillsSection skillDetail={skillDetail} setSkillDetail={setSkillDetail}/>
      </FoldWrapper>
      <ProjectsSection projects={data} />
      <FooterSection/>
      {skillDetail !== '' && <>
      <SkillsDetailsWrapper></SkillsDetailsWrapper>
      <SkillsDetails>
        <TitleDetail $isVisible={true} $titleSize={1.5} $titleWeight={400} $titleColor="#E8E7E7">
          {skillsData[skillDetail].title}
        </TitleDetail>
        <ParagraphDetails>{skillsData[skillDetail].summarie}</ParagraphDetails>
        <SkillsDetailsClose onClick={() => setSkillDetail('')}>
          <X size={32} />
          </SkillsDetailsClose>
      </SkillsDetails>
        </>
      }
    </>

  )
}

export default App
