import { styled } from 'styled-components';


export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  width: 100%;
  transition: all 300ms ease;
  
  @media screen and (max-width: 650px) {
    padding: 1rem 2rem;
  }
`;

export const ButtonDownloadCV = styled.button`
  background: transparent;
  color: #FFC25C;
  padding: 10px 20px;
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 300ms ease;
  
  &:hover {
    text-shadow: 0 0 5px #FFC25C;
  }
`;