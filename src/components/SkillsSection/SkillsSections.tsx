import Skill from '../Skill/Skill'
import SkillBar from '../SkillBar/SkillBar'
import { SkillsWrapper } from './style'

function SkillsSections() {
  return (
    <SkillsWrapper>
      <article>
        <Skill title='HTML & CSS'>
        A combinação de HTML semântico e CSS bem estruturado me deu a capacidade de criar sites que não apenas funcionam bem, mas também proporcionam uma ótima experiência ao usuário.
        </Skill>
        <Skill title='Javascript'>
        As minhas habilidades em JavaScript vão além de simplesmente escrever código; elas incluem uma profunda compreensão da lógica, do JavaScript assíncrono, da programação funcional, da manipulação do DOM (Document Object Model) e da gestão de eventos.
        </Skill>
        <Skill title='React'>
          Minhas habilidades em React representam um domínio sólido dessa biblioteca JavaScript essencial para o desenvolvimento de interfaces de usuário modernas. Minha experiência abrange uma ampla gama de tópicos, desde a criação de componentes funcionais e de classe até o gerenciamento de estado, a utilização de diversos hooks nativos e a criação de hooks personalizados.
        </Skill>
        <Skill title='Styled-components, CSS-Modules'>
          Minhas habilidades em desenvolvimento de estilos são uma parte fundamental do meu conjunto de habilidades como desenvolvedor. O que torna minha abordagem única é a capacidade de criar estilos robustos e dinâmicos usando técnicas avançadas, como CSS Modules e Styled-components.
        </Skill>
      </article>

      <section >
        <SkillBar skillName='HTML' skillPercent={100}/>
        <SkillBar skillName='CSS' skillPercent={90}/>
        <SkillBar skillName='Javascript' skillPercent={80}/>
        <SkillBar skillName='React' skillPercent={80}/>
      </section>
    </SkillsWrapper>
  )
}

export default SkillsSections