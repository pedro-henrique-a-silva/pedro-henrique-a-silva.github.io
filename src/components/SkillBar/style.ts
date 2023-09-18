import { styled } from 'styled-components';

type SkillFillBarProps = {
  percentage: number;
}

export const SkillBarWrapper = styled.div`
  position: relative;
  border: 1px solid #777;
  width: 90%;
  border-radius: 10px;
  padding: 10px;
  margin: 50px 0;
`

export const SkillBarTitle = styled.h3`
  position: absolute;
  top: -25px;
`

export const SkillBarPercentage = styled.span`
  position: absolute;
  font-size: 14px;
  opacity: 0.7;
  right: 1px;
  top: -25px;
`

export const SkillFillBar = styled.div<SkillFillBarProps>`
  background-color: #007CED;
  border: none;
  width: 50%;
  height: 5px;
  border-radius: 10px;
  width: ${(props) => props.percentage}%;
`