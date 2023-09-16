import { styled } from 'styled-components';

export const CarouselContainer = styled.ul`
  display: flex;
  overflow: auto;
  width: 270px;
  /* justify-content: center; */
  align-items: center;
  margin: 29px auto;
  scroll-behavior: smooth;
  position: relative;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

 
`;

export const Card = styled.li`
  position: relative;
  padding: 10px;
  height: 300px;
  background-color: #252525;
  text-align: center;
  border-radius: 10px;
  flex: none;

  & h3 {
    margin-bottom: 0.5rem;
  }

  & p {
    margin-bottom: 0.5rem;
  }

  & img {
    object-fit: cover;
    width: 200px;
  }
`;

export const ArrowsWrapper = styled.div`
  text-align: center;
  
  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  & button:nth-of-type(1) {
    left: 0;
    top: 50%;
  }

  & button:nth-of-type(2) {
    right: 0;
    top: 50%;
  }
`

export const ImgContainer = styled.div`
  width: 250px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;

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
  gap: 0.5rem;

  & span {
    padding: 0.25rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.borderColor};
    font-size: 0.75rem;
    border-radius: 10px;
  }
`