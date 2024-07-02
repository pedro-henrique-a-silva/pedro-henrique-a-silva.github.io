import { styled } from 'styled-components';
import { FilterButtonProps } from '../../types/filterTypes';


export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;  
  width: 100%;
  transition: all 300ms ease;
`;

export const FilterButton = styled.button<FilterButtonProps>`
  border: none;
  background: transparent;
  color: #656773;
  position: relative;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 300ms ease;
  margin: 0 10px;

  &:hover {
    color: #FFC25C;
  }

  &:hover::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: #FFC25C;
    transition: all 300ms ease;
  }

  ${({ $isActived }) => $isActived && `
    color: #FFC25C;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -4px;
      width: 100%;
      height: 2px;
      background: #FFC25C;
    }
  `}
`;