import { css, keyframes, styled } from 'styled-components';
import { SkillsCardProps } from '../../types/skillsTypes';
import { TitleProps } from '../../types/titleTypes';

const cardHoverAnimation = keyframes`
0% {
		left: -110%;
		top: 90%;
	}
	50% {
		left: 15%;
		top: -30%;
	}
	100% {
		left: -10%;
		top: -10%;
	}
`;

const skillCardFadeInRight = keyframes`
0% {
  transform: translateX(100%);
  opacity: 0;
  }
100% {
  transform: translateX(0);
  opacity: 1;
}
`;


const skillDetailFadeInBottom = keyframes`
0% {
  transform: translate(200, -50%);
  opacity: 0;
  }
100% {
  transform: translate(-50%, -50%);
  opacity: 1;
}
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 300ms ease;
`;

export const SkillsCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  transition: all 300ms ease;
`;



export const SkillsCard = styled.div<SkillsCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 8px;
  border-radius: 10px;
  background: #333646;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  animation: ${({$isVisible}) => $isVisible && css`${skillCardFadeInRight} .5s ease-in-out forwards`};
  animation-delay: ${({$cardDelay}) => $cardDelay}s;

  &:hover svg {
    transform: scale(1.3) rotate(10deg);
    color: #f1f1f1;
  }

  &::before {
	content: "";
	position: absolute;
	width: 120%;
	height: 120%;
	background: hsl(37.55deg 75.36% 58.46%);
	left: -110%;
	top: 90%;
	transform: rotate(45deg);
}

&:hover::before {
	animation: ${cardHoverAnimation} 0.7s 1 forwards;
}
`;

export const SkillsDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 997;
  left: 0;
  opacity: 0.5;
  background: #000;
  width: 100vw;
  height: 100vh;
`;

export const SkillsDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  z-index: 998;
  background: #252734;
  width: 50%;
  border-radius: 10px;
  padding: 20px;
  animation: ${skillDetailFadeInBottom} .5s ease-in-out forwards;

  @media screen and (max-width: 650px) {
    width: 80%;
  }
`;


export const SkillsDetailsClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #FFC25C;
  font-size: 1.5rem;
  transition: all 300ms ease;

  &:hover {
    border: 1px solid #FFC25C;
  }
`;

export const TitleDetail = styled.h2<TitleProps>`
  font-size: ${({ $titleSize }) => $titleSize}rem;
  font-weight: ${({ $titleWeight }) => $titleWeight};
  color: ${({ $titleColor }) => $titleColor};
  transition: all 300ms ease;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width: 650px) {
    margin-top: 2rem;
  }
`;