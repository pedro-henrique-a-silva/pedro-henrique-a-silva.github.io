import { SkillsSectionData } from '../../type';
import Skill from '../Skill/Skill'
import SkillBar from '../SkillBar/SkillBar'
import { SkillsWrapper } from './style'

type SkillsSectionsProps = {
  skills: SkillsSectionData;
}

function SkillsSections(props: SkillsSectionsProps) {
  const { skills } = props;
  return (
    <SkillsWrapper>
      <article>
        {skills.summariesSkills.map((skill, index) => (
          <Skill key={index} title={skill.title}>
            {skill.summarie}
          </Skill>
        ))}
      </article>

      <section >
        {skills.skills.map((skill, index) => (
          <SkillBar key={index} skillName={skill.skillName} skillPercent={skill.skillPercent}/>
        ))}
      </section>
    </SkillsWrapper>
  )
}

export default SkillsSections