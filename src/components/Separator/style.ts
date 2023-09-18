import styled,{keyframes} from 'styled-components';

const slideFromLeft = keyframes`

  from {
    transform: translateX(-100%);
    opacity: 0;
  }


  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const SeparatorWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  /* box-shadow: 1px 1px 6px 0px #e81cff; */
  box-shadow: 1px 1px 6px 0px ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  min-width: 370px;
  width: 100%;
  transition: all 300ms ease;
  animation: ${slideFromLeft} .5s ease;


  & h1 {
    margin-left: 30px;
    line-height: 100px;
  }
`