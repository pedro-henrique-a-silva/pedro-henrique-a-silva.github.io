import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 10px;
  width: 100%;
  /* height: 70px; */
  padding: 1rem 0.5rem;
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
  border: none;
  cursor: pointer;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 4px solid #fff;
  border-radius: 50%;

  & > div {
    position: relative;
    width: 60%;
    height: 60%;
    background-color: #fff;
    border-radius: 50%;
  }

  & > div div {
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    border: 4px solid ${({ theme }) => theme.colors.primary};
    transition: all 300ms ease;

  }

  & > div div:nth-of-type(1) {
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  & > div div:nth-of-type(2) {
    top: 50%;
    left: -8px;
    transform: translateY(-50%);
  }

  & > div div:nth-of-type(3) {
    top: 50%;
    right: -8px;
    transform: translateY(-50%);
    
  }

  & > div div:nth-of-type(4) {
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

`;