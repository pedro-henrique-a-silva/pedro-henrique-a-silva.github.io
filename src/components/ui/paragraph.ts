import { styled } from 'styled-components';
import { ParagraphProps } from '../../type';

export const Paragraph = styled.p<ParagraphProps>`
  font-size: .8rem;
  font-weight: 400;
  color: ${({ $paragraphColor = "#656773"}) => $paragraphColor };
  transition: all 300ms ease;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;
`;