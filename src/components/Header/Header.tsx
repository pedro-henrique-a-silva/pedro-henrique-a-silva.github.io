import { useContext } from 'react';
import ThemeContext from '../../context/context-theme';
import { Moon, SunDim } from '@phosphor-icons/react';
import MenuHamburguer from '../MenuHamburguer/MenuHamburguer';
import { 
  HeaderWrapper, 
  MenuWrapper,
  ToggleThemeButton } from './styles';

function Header() {
  const { theme, updateTheme } = useContext(ThemeContext)
  return (
    <HeaderWrapper>
      <h1>Logo</h1>
      <div>
        <ToggleThemeButton
          onClick={() => updateTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {
            (theme === 'dark') 
            ? <SunDim size={24} color="#f5f0f0" weight="fill" />
            : <Moon size={24} color="#bd6161" weight="fill" />
          }
        </ToggleThemeButton>
        <MenuHamburguer />

        <MenuWrapper>
          <ul>
            <li>
              <a href="#">Home</a>  
            </li>
            <li>
              <a href="#">Front-End</a> 
            </li>
            <li>
              <a href="#">Back-End</a>  
            </li>
          </ul>
        </MenuWrapper>
      </div>
  </HeaderWrapper>
  )
}

export default Header