import { styled } from 'styled-components';


export const CarouselWrapper = styled.div`
  padding: 0 50px;
  margin: 29px auto;
  min-width: 390px;

  & div {
    border-radius: 10px;
  }

  & > section {
    padding: 1rem 1rem;
    overflow: none;
  }
`;

export const Card = styled.li`
  position: relative;
  padding: 10px;
  min-width: 269px;
  height: 420px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  flex: none;
  cursor: grab;
  transition: all 300ms ease;

  /* &:hover {
    transform: scale(1.05);
  } */

  & a {
    text-decoration: none;
    cursor: grab;
  }

  & a:active { 
    color: ${({ theme }) => theme.colors.primaryText};
  }

  & h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  & p {
    margin-bottom: 1rem;
    /* width: 251px; */
    line-height: 1.5;
    font-size: 0.75em;
    text-align: justify;
    color: ${({ theme }) => theme.colors.primaryText};

  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;


export const ImgContainer = styled.div`
  /* width: 250px; */
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  height: 130px;
  

  &:before{
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    content: '';
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 240px;
  gap: 0.3rem;

  & span {
    padding: 0.25rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.borderColor};
    font-size: 0.7rem;
    border-radius: 10px;
  }
`