import { css, keyframes, styled } from 'styled-components';
import { FooterMenuLinkWrapperProps, FooterParagraphProps, FooterSocialMediaProps } from '../../types/footerTypes';

const menuLinkFadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const paragraphFadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const socialMediaFadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 100px;
  width: 100%;
  overflow: hidden;
  background-color: #252734;
  transition: all 300ms ease;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media screen and (max-width: 650px) {
    padding: 1rem 2rem;
  }
`;

export const FooterSocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;


export const FooterSocialMedia = styled.a<FooterSocialMediaProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  z-index: 999;
  opacity: 0;
  color: #FFC25C;
  border: 1px solid #FFC25C;
  cursor: pointer;
  transition: all 300ms ease;
  animation: ${({$isVisible}) => $isVisible && css`${socialMediaFadeInBottom} 1s ease-in-out forwards`};

  &:hover {
    color: #ffffff;
    transform: rotate(0deg) skew(0deg) translate(0, -4px);
    border: 1px solid ${props => props.$socialColor};
    background: ${props => props.$socialColor};
  }
`;


export const FooterMenuLinkWrapper = styled.div<FooterMenuLinkWrapperProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  height: 100%;
  transition: all 300ms ease;
  animation: ${({$isVisible}) => $isVisible && css`${menuLinkFadeInRight} 1s ease-in-out forwards`};
  
  
  
`;

export const FooterMenuLink = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: #656773;
  position: relative;
  text-decoration: none;
  transition: all 300ms ease;
  cursor: pointer;
  margin: 0 15px;

  &:hover {
    color: #E8E7E7;
  }

  @media screen and (max-width: 650px) {
    font-size: 1rem;
  }
`;

export const FooterParagraph = styled.p<FooterParagraphProps>`
  font-size: .9rem;
  font-weight: 400;
  color: ${({ $paragraphColor = "#656773"}) => $paragraphColor };
  transition: all 300ms ease;
  opacity: 0;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;
  animation: ${({$isVisible}) => $isVisible && css`${paragraphFadeInLeft} 1s ease-in-out forwards`};
  
  @media screen and (max-width: 650px) {
    font-size: .7rem;
  }
`;