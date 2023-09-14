import { 
    SkillBarWrapper, 
    SkillFillBar, 
    SkillBarTitle,
    SkillBarPercentage } from './style'

type SkillBarProps = {
  skillName: string,
  skillPercent: number,
}

function SkillBar(props: SkillBarProps) {
  const { skillName, skillPercent } = props;
  return (
    <SkillBarWrapper>
      <SkillBarTitle>{skillName}</SkillBarTitle>
      <SkillBarPercentage>{`${skillPercent}%`}</SkillBarPercentage>
      <SkillFillBar percentage={skillPercent}/>
    </SkillBarWrapper>
  )
}

export default SkillBar