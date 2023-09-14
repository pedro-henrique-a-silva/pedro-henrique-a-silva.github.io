import GlobalStyles from './styles/global-styles'
import { ThemeProvider } from 'styled-components';
import dark from './styles/theme/dark';
import Header from './components/Header/Header';
import About from './components/About/About';
import Separator from './components/Separator/Separator';
import SkillsSections from './components/SkillsSection/SkillsSections';
import Carousel from './components/Carousel/Carousel';

function App() {

  return (
    <ThemeProvider theme={ dark }>
      <GlobalStyles />
      <Header/>
      <main>
        <About />
        <Separator>Front-End Skills</Separator>
        <SkillsSections />
        <Carousel>
          <div>Div 1</div>
          <div>Div 2</div>
          <div>Div 3</div>
       </Carousel>
      </main>
    </ThemeProvider>

  )
}

export default App
