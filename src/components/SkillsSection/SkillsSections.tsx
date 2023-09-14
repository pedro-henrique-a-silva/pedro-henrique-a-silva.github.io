import Skill from '../Skill/Skill'
import SkillBar from '../SkillBar/SkillBar'
import { SkillsWrapper } from './style'

function SkillsSections() {
  return (
    <SkillsWrapper>
      <article>
        <Skill title='HTML & CSS'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae culpa aliquid modi consequatur praesentium hic autem maiores natus, et repellat provident dolorem earum, facilis omnis explicabo tenetur facere. Eius.
        </Skill>
        <Skill title='Javascript'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae culpa aliquid modi consequatur praesentium hic autem maiores natus, et repellat provident dolorem earum, facilis omnis explicabo tenetur facere. Eius.
        </Skill>
      </article>

      <section >
        <SkillBar skillName='HTML' skillPercent={100}/>
        <SkillBar skillName='Javascript' skillPercent={80}/>
        <SkillBar skillName='CSS' skillPercent={90}/>
      </section>
    </SkillsWrapper>
  )
}

export default SkillsSections