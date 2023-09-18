import {useContext} from 'react'
import ThemeContext from './context/context-theme';
import GlobalStyles from './styles/global-styles'
import { ThemeProvider } from 'styled-components';
import dark from './styles/theme/dark';
import light from './styles/theme/light';
import Header from './components/Header/Header';
import About from './components/About/About';
import Separator from './components/Separator/Separator';
import SkillsSections from './components/SkillsSection/SkillsSections';
import Carousel from './components/Carousel/Carousel';


function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={(theme === 'dark') ? dark : light}>
      <GlobalStyles />
      <Header/>
      <main>
        <About />
        <Separator id='front-end'>Front-End Skills</Separator>
        <SkillsSections />
        <Separator>Projetos</Separator>
        <Carousel />
      </main>
    </ThemeProvider>

  )
}

export default App
