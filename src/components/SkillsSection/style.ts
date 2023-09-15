import styled,{keyframes} from 'styled-components';

const fadeIn = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }

  50% {
    transform: translateX(0);
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

export const SkillsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 70px auto;  
  animation: ${fadeIn} 1s ease;

  & article { 
    min-width: 300px;
  }

  & section {
    min-width: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 769px) {
    flex-direction: row;

    & article {
      width: 45%;
    }

    & section {
      width: 45%;
    }
  }
`