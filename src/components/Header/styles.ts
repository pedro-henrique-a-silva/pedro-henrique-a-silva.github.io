import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 10px;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 1px 6px 0px ${({ theme }) => theme.colors.secondary};
  z-index: 10;
  transition: all 300ms ease;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

export const MenuWrapper = styled.nav`
  font-size: 18px;

  @media screen and (min-width: 769px) {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    display: none;
  
  }

  & ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 20px;
   }

 & a {
  text-decoration: none;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 20ms ease-in;
  -webkit-text-stroke-color: rgba(#FFFFFF, 0.5);
  position: relative;
  font-size: 1rem;
  
  &::before {
    content: "";
    height: 1px;
    background-color: #FFFFFF;
    position: absolute;
    top: calc(50% + 1em);
    width: 0%;
    left: 50%;
    transition: all 300ms ease;
  }
  &:hover {
    &::before {
      width: 50%;
      left: 25%;
    }
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  } 
}
`

export const ToggleThemeButton = styled.button`
  background-color: transparent;
  border: none
`