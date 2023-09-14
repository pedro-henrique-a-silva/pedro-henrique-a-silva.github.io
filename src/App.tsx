import GlobalStyles from './styles/global-styles'
import { ThemeProvider } from 'styled-components';
import dark from './styles/theme/dark';
import Header from './components/Header/Header';

function App() {

  return (
    <ThemeProvider theme={ dark }>
      <Header/>
      <div>
        <GlobalStyles />
      </div>
    </ThemeProvider>

  )
}

export default App
