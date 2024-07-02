import { styled } from 'styled-components';
import { ParagraphProps } from '../../types/paragraphTypes';

export const Paragraph = styled.p<ParagraphProps>`
  font-size: .8rem;
  font-weight: 400;
  color: ${({ $paragraphColor = "#656773"}) => $paragraphColor };
  transition: all 300ms ease;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;
`;


export const ParagraphDetails = styled.p<ParagraphProps>`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ $paragraphColor = "#E8E7E7"}) => $paragraphColor };
  transition: all 300ms ease;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;
`;