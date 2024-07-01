import { keyframes, styled } from 'styled-components';
import { ProjectCardSocialMediaProps } from '../../type';

const projectDescriptionEffect = keyframes`
0% {
  transform: translateY(100%);
  opacity: 0;
  }
100% {
  transform: translateY(0);
  opacity: .8;
}
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 100px;
  width: 100%;
  transition: all 300ms ease;
  

  & div.swiper {
    max-width: 100%;
    padding: 50px 0;
  }
`;

export const ProjectCard = styled.div`
  text-align: center;
  position: relative;
  border-radius: 10px;
  background-color: #000;
  opacity: .8;
  overflow: hidden;
  cursor: grab;
  transition: all 300ms ease;

  &:hover div {
    animation: ${projectDescriptionEffect} .5s ease-in-out forwards;
  }
  
  
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  transition: all 300ms ease;
`;

export const ProjectDescription = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* background-color: #000; */
  background-color: #281900;
  opacity: 0;
  padding: 20px;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 0 0 10px 10px;
  transition: all 300ms ease;
`;

export const ProjectCardSocialMediaWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  z-index: 997;
  transition: all 300ms ease;
`;


export const ProjectCardSocialMedia = styled.a<ProjectCardSocialMediaProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  z-index: 999;

  color: #FFC25C;
  border: 1px solid #FFC25C;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    color: #ffffff;
    transform: rotate(0deg) skew(0deg) translate(0, -4px);
    border: 1px solid ${props => props.$socialColor};
    background: ${props => props.$socialColor};
  }
`;