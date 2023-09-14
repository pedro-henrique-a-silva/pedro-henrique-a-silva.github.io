import { styled } from 'styled-components';

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 5px;
  margin-bottom: 70px;
  gap: 30px;
`;

export const ImgProfile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;

  &::before {
    content: "";
    position: absolute;
    border-radius: 100%;
    width: 307px;
    height: 307px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -1;
    transform: translate3d(0px, 0px, 0) scale(0.95);
    filter: blur(15px);
    transition: opacity 0.3s;
    animation-name: rotate1;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  } &[data-anim="1"] {
  &::before {
      animation-name: rotate2;
      animation-duration: 3s;
    }
  }

  @keyframes rotate1 {
    0% {transform: translate3d(0px, 0px, 0) scale(0.95) rotate(0deg);opacity: 1;}
    29% {transform: translate3d(0px, 0px, 0) scale(0.95) rotate(0deg);opacity: 0.3;}
    50% {transform: translate3d(0px, 0px, 0) scale(1) rotate(180deg);opacity: 0.5;}
    54% {transform: translate3d(0px, 0px, 0) scale(1.1) rotate(180deg);opacity: 0.4;}
    85% {transform: translate3d(0px, 0px, 0) scale(0.95) rotate(220deg);opacity: 0.8;}
    100% {transform: translate3d(0px, 0px, 0) scale(0.95) rotate(360deg);opacity: 1;}
  }

  & img {
    width: 100%;
    height: 300px;
    border-radius: 100%;
  }
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & p:nth-of-type(2) {
    text-align: center;
  }
`
