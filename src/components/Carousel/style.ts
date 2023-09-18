import { styled } from 'styled-components';


export const CarouselWrapper = styled.div`
  width: fit-content;
  min-width: 270px;
  position: relative;
  margin: 29px auto;

  & button {
    position: absolute;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.arrowBackground};
    border: none;
    cursor: pointer;
  }

  & button:nth-of-type(1) {
    left: -35px;
    top: 50%;
  }

  & button:nth-of-type(2) {
    right: -35px;
    top: 50%;
  }

  @media (max-width: 699px) {
    width: 270px;

    & ul {
      width: 270px;
    }
  }

  @media (min-width: 700px) {
    width: 570px;

    & ul {
      width: 570px;
    }
  }

  @media (min-width: 1000px) {
    width: 860px;

    & ul {
      width: 860px;
    }
  }
  @media (min-width: 1300px) {
    width: 1140px;

    & ul {
      width: 1140px;
    }
  }
`;

export const CarouselContainer = styled.ul`
  display: flex;
  overflow: auto;
  min-width: 270px;
  align-items: center;
  scroll-behavior: smooth;
  padding: 1rem 0;
  position: relative;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

`;

export const Card = styled.li`
  position: relative;
  padding: 10px;
  height: 420px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;
  border-radius: 10px;
  flex: none;
  cursor: pointer;

  & a {
    text-decoration: none;
  }

  & a:active { 
    color: ${({ theme }) => theme.colors.gray100};
  }

  & h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.gray100};
  }

  & p {
    margin-bottom: 1rem;
    width: 251px;
    font-size: 0.75rem;
    text-align: justify;
    color: #fff;

  }

  & img {
    object-fit: cover;
    width: 200px;
    width: 100%;
    height: 100%;
  }
`;

export const ArrowsWrapper = styled.div`
  text-align: center;
  
  
`

export const ImgContainer = styled.div`
  width: 250px;
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