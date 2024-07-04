import { keyframes, styled } from 'styled-components'

const menuLinkFadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MenuLink = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: #656773;
  position: relative;
  text-decoration: none;
  transition: all 300ms ease;
  cursor: pointer;
  margin: 0 15px;

  &:hover {
    color: #E8E7E7;
  }

  &:hover::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #FFC25C;
    transition: all 0.3s ease;
  
  }
`;

export const MenuLinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  transition: all 300ms ease;
  animation: ${menuLinkFadeInLeft} 1s ease-in-out;

  @media screen and (max-width: 950px) {
    & a {
      display: none
    }
  }
`;