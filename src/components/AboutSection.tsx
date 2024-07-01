import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { 
  AboutContentWrapper, 
  AboutSocialMedia, 
  AboutSocialMediaWrapper, 
  AboutTitle, 
  AboutTitleWrapper, 
  AboutWrapper, 
  ImgProfile 
} from "./ui/aboutComponents"
import { Paragraph } from "./ui/paragraph"
import { Title } from "./ui/title"

function About() {
  return (
    <AboutWrapper>
      <AboutTitleWrapper>
        <AboutTitle>Pedro Silva.</AboutTitle>
      </AboutTitleWrapper>
      <ImgProfile src="foto.png"/>
      <AboutContentWrapper>
        <Paragraph>- Sobre mim</Paragraph>
        <Title
          $isVisible={true}
          $titleSize={1.5} 
          $titleWeight={400} 
          $titleColor="#E8E7E7">
            FullStack Software Developer
        </Title>
        <Paragraph>Olá, meu nome é Pedro Silva, sou desenvolvedor front-end e designer de interfaces. 
          Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Impacta de Tecnologia.
          Meu foco é desenvolver soluções digitais que sejam acessíveis e intuitivas para o usuário final.
          Tenho experiência com HTML, CSS, JavaScript, React, TypeScript, Next.js, Styled-Components, Figma e Adobe XD.
        </Paragraph>
        <AboutSocialMediaWrapper>
          <AboutSocialMedia $socialColor="#0077B5">
            <LinkedinLogo size={18}/>
          </AboutSocialMedia>
          <AboutSocialMedia $socialColor="#7232bd">
            <GithubLogo size={18}/>
          </AboutSocialMedia>
        </AboutSocialMediaWrapper>
      </AboutContentWrapper>
    </AboutWrapper> 
  )
}

export default About