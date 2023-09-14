import GlobalStyles from './styles/global-styles'
import { ThemeProvider } from 'styled-components';
import dark from './styles/theme/dark';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {

  return (
    <ThemeProvider theme={ dark }>
      <GlobalStyles />
      <Header/>
      <main>
        <About />
      </main>
    </ThemeProvider>

  )
}

export default App
