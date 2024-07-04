import { keyframes, styled } from 'styled-components';
import { AboutSocialMediaProps } from '../../types/aboutTypes';

const ImgFadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const ImgFadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const titleFadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const aboutContentFadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  margin-top: 100px;
  overflow: hidden;
  transition: all 300ms ease;
  padding: 4.2rem 6rem;

  @media screen and (max-width: 1160px) {
    padding: 1rem 6rem;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 650px) {
    padding: 1rem 2rem;
  }

  
  
`;

export const ImgProfile = styled.img`
  width: 20%;
  border-radius: 5%;
  max-width: 271px;
  filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 70px);
  transition: all 300ms ease;
  animation: ${ImgFadeInBottom} 1s ease-in-out;
  
  @media screen and (max-width: 1000px) {
    position: static;
    width: 155px;
    height: 204px;
    animation: ${ImgFadeInRight} 1s ease-in-out;
  }

  @media screen and (min-width: 1002px) {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
  }
`;

export const AboutContentWrapper = styled.div`
  max-width: 350px;
  transition: all 300ms ease;
  animation: ${aboutContentFadeInRight} 1s ease-in-out;

  @media screen and (max-width: 1160px) {
    max-width: 300px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 400px;
  }
`;

export const AboutTitleWrapper = styled.div`
  transition: all 300ms ease;
  animation: ${titleFadeInRight} 1s ease-in-out;

  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 5.5rem;
  font-weight: 400;
  color: #E8E7E7;
  transition: all 300ms ease;
  font-family: 'Poppins', sans-serif;

  &:after {
    content: '';
    display: block;
    width: 59px;
    height: 9px;
    background: #FFC25C;
    transition: all 300ms ease;
  }

  @media screen and (max-width: 1248px) {
    font-size: 5.2rem;
  }


  @media screen and (max-width: 1200px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 1150px) {
    font-size: 4.8rem;
  }

  @media screen and (max-width: 1100px) {
    font-size: 4.5rem;
  }

  @media screen and (max-width: 1050px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 650px) {
    font-size: 3rem;
  }
`;

export const AboutSocialMediaWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  transition: all 300ms ease;
`;

export const AboutSocialMedia = styled.a<AboutSocialMediaProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;

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

export const AboutButtonDownloadCV = styled.button`
  background: transparent;
  color: #FFC25C;
  padding: 10px 20px;
  border: 1px solid #FFC25C;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 20px;
  cursor: pointer;
  transition: all 300ms ease;
  
  &:hover {
    text-shadow: 0 0 5px #FFC25C;
    box-shadow: 0 0 5px #FFC25C;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;