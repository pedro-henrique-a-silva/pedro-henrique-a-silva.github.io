import { ButtonDownloadCV, HeaderBar } from './ui/headerComponents'
import Logo from './LogoSection'
import { MenuLink, MenuLinkWrapper } from './ui/menuLink'
import { generatePDFContent } from '../utils/geraPDF'

function HeaderSection() {
  return (
    <HeaderBar id="home">
      <Logo />
      <MenuLinkWrapper>
        <ButtonDownloadCV onClick={() => generatePDFContent()}>Download CV</ButtonDownloadCV>
        <MenuLink href='#home'>Home</MenuLink>
        <MenuLink href='#about'>Sobre mim</MenuLink>
        <MenuLink href='#projects'>Portifolio</MenuLink>
      </MenuLinkWrapper>
    </HeaderBar>
  )
}

export default HeaderSection