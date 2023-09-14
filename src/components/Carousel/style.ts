import { styled } from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const Slide = styled.div<{index: number}>`
  min-width: 33.33%; /* Mostra inicialmente 3 divs */
  transition: transform 0.5s;
  transform: translateX(${props => props.index * -33.33}%);
`;