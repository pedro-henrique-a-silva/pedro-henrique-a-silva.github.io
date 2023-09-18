import styled, { keyframes, css } from 'styled-components';

type MenuPopupProps = {
  menuOpen: boolean;
}

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 300px; /* Ajuste a altura máxima conforme necessário */
    opacity: 1;
  }
`;

// const fadeInOut = keyframes\`
//   from {
//     transform: translateY(-6px) rotate(-45deg);
//     opacity: 0;
//   }
//   to {
//     transform: translateY(0) rotate(0deg);
//     opacity: 1;
//   }
// `;


export const MenuHamburguerButton = styled.button`

  background-color: transparent;
  border: none;

  @media screen and (min-width: 769px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: inline-block;
    color:  #fff;
  }
`

export const MenuPopup = styled.nav<MenuPopupProps>`
  position: absolute;
  top: 67px;
  right: 0;
  width: 100px;
  ${props =>
    props.menuOpen &&
    css`
      animation: ${slideDown} 1s ease;
    `}

  & ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 1px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
   }

  & ul li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    padding: 10px 2px;
  }

  & ul li:last-child {
    border-bottom: none;
  }

 & a {
  text-decoration: none;
  opacity: 0.8;
  color: #FFFFFF;
  transition: opacity 20ms ease-in;
  -webkit-text-stroke-color: rgba(#FFFFFF, 0.5);
  opacity: 0.5;
  position: relative;
  font-size: 0.7rem;
  
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