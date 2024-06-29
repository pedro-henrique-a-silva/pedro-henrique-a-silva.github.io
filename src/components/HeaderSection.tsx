import { HeaderBar } from './ui/headerComponents'
import Logo from './LogoSection'
import { MenuLink, MenuLinkWrapper } from './ui/menuLink'

function HeaderSection() {
  return (
    <HeaderBar>
      <Logo />
      <MenuLinkWrapper>
        <MenuLink>Home</MenuLink>
        <MenuLink>Sobre mim</MenuLink>
        <MenuLink>Portifolio</MenuLink>
      </MenuLinkWrapper>
    </HeaderBar>
  )
}

export default HeaderSection