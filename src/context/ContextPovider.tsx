import { useState } from "react"
import ThemeContext from "./context-theme"

type ContextProps = {
  children: React.ReactNode,
}

function ContextPovider({children}: ContextProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const updateTheme = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme)
  }
  const context = {
    theme,
    updateTheme
  }
  return (
    <ThemeContext.Provider value={context}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ContextPovider