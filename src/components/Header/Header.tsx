import { HeaderWrapper, MenuWrapper } from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <h1>Logo</h1>
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
    </HeaderWrapper>
  )
}

export default Header