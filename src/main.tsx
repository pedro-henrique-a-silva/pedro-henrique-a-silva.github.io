import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ContextPovider from './context/ContextPovider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ContextPovider>
      <App />
    </ContextPovider>,
)
