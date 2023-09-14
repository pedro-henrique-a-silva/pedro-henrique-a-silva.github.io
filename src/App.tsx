import GlobalStyles from './styles/global-styles'
import { ThemeProvider } from 'styled-components';
import dark from './styles/theme/dark';
import Header from './components/Header/Header';
import About from './components/About/About';
import Separator from './components/Separator/Separator';

function App() {

  return (
    <ThemeProvider theme={ dark }>
      <GlobalStyles />
      <Header/>
      <main>
        <About />
        <Separator>Front-End Skills</Separator>
      </main>
    </ThemeProvider>

  )
}

export default App
