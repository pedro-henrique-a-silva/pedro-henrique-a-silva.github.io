import { css, keyframes, styled } from 'styled-components';
import { TitleProps } from '../../types/titleTypes';

const titleFadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Title = styled.h2<TitleProps>`
  font-size: ${({ $titleSize }) => $titleSize}rem;
  font-weight: ${({ $titleWeight }) => $titleWeight};
  color: ${({ $titleColor }) => $titleColor};
  transition: all 300ms ease;
  opacity: 0;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  animation: ${({$isVisible}) => $isVisible && css`${titleFadeInRight} 1s ease-in-out forwards`};
`

export const TitleNoProjects = styled.h2<TitleProps>`
  font-size: ${({ $titleSize }) => $titleSize}rem;
  font-weight: ${({ $titleWeight }) => $titleWeight};
  color: ${({ $titleColor }) => $titleColor};
  transition: all 300ms ease;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`