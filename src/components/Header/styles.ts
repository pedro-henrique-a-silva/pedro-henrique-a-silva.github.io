import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 10px;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;
  /* border: 1px solid white; */
  background-color: #252525;
  z-index: 10;
`

export const MenuWrapper = styled.nav`
  font-size: 18px;

  & ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 20px;
 }

 & a {
  text-decoration: none;
  opacity: 0.8;
  color: #FFFFFF;
  transition: opacity 20ms ease-in;
  -webkit-text-stroke-color: rgba(#FFFFFF, 0.5);
  opacity: 0.5;
  position: relative;
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