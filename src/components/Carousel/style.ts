import { styled } from 'styled-components';

export const CarouselContainer = styled.ul`
  display: flex;
  overflow: auto;
  width: 75vw;
  justify-content: center;
  align-items: center;
  margin: 29px auto;
  scroll-behavior: smooth;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

 
`;

export const Card = styled.li`
  height: 200px;
  margin: 0 20px;
  padding: 10px;
  background-color: #252525;
  text-align: center;
  flex: nono;

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