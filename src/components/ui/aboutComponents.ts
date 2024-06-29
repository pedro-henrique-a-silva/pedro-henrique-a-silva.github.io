import { keyframes, styled } from 'styled-components';
import { AboutSocialMediaProps } from '../../type';

const ImgFadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
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
`;

export const ImgProfile = styled.img`
  width: 20%;
  border-radius: 5%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 70px);
  transition: all 300ms ease;
  animation: ${ImgFadeInBottom} 1s ease-in-out;
`;

export const AboutContentWrapper = styled.div`
  max-width: 350px;
  transition: all 300ms ease;
  animation: ${aboutContentFadeInRight} 1s ease-in-out;
`;

export const AboutTitleWrapper = styled.div`
  transition: all 300ms ease;
  animation: ${titleFadeInRight} 1s ease-in-out;
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
    font-size: 5rem;
  }


  @media screen and (max-width: 1150px) {
    font-size: 4.5rem;
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
    border: 1px solid ${props => props.socialColor};
    background: ${props => props.socialColor};
  }
`;