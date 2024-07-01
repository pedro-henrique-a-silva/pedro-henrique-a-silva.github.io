import { css, keyframes, styled } from 'styled-components';
import { SkillsCardProps } from '../../type';

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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  transition: all 300ms ease;
`;

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