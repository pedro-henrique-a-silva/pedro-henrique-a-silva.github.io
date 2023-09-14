import { styled } from 'styled-components';

export const SeparatorWrapper = styled.section`
  background-color: #252525;
  /* box-shadow: 1px 1px 6px 0px #e81cff; */
  box-shadow: 1px 1px 6px 0px ${({ theme }) => theme.colors.secondary};
  width: 100%;

  & h1 {
    margin-left: 30px;
    line-height: 100px;
  }
`