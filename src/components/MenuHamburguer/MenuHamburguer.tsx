import { useState } from 'react'
import { List } from '@phosphor-icons/react'
import {MenuHamburguerButton, MenuPopup} from './style';

function MenuHamburguer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <MenuHamburguerButton type='button' onClick={ handleMenuOpen }>
        <List size={24} weight="fill" />
      </MenuHamburguerButton>

      {
        menuOpen && (
          <MenuPopup menuOpen= {menuOpen}>
            <ul>
                <li>
                  <a href="#">Home</a>  
                </li>
                <li>
                  <a href="#front-end">Front-End</a> 
                </li>
                <li>
                  <a href="#">Back-End</a>  
                </li>
              </ul>
          </MenuPopup>
        )
      }
    </>
  )
}

export default MenuHamburguer