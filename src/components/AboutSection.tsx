import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { 
  AboutButtonDownloadCV,
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
import { generatePDFContent } from "../utils/geraPDF"

function About() {
  return (
    <AboutWrapper id="about">
      <ImgProfile src="foto.png"/>
      <AboutTitleWrapper>
        <AboutTitle>Pedro Silva.</AboutTitle>
        <AboutButtonDownloadCV onClick={() => generatePDFContent()}>Download CV</AboutButtonDownloadCV>
      </AboutTitleWrapper>
      <AboutContentWrapper>
        <Paragraph>- Sobre mim</Paragraph>
        <Title
          $isVisible={true}
          $titleSize={1.5} 
          $titleWeight={400} 
          $titleColor="#E8E7E7">
            FullStack Software Developer
        </Title>
        <Paragraph>Sou um Desenvolvedor web full stack versátil. Com uma base sólida como desenvolvedor, busco traduzir esse conhecimento em soluções intuitivas e eficazes. Minha paixão pela tecnologia vai além do código, também é motivada pela oportunidade de impactar positivamente a vida das pessoas.
        </Paragraph>
        <AboutSocialMediaWrapper>
          <AboutSocialMedia href="https://www.linkedin.com/in/pedro-henrique-a-silva/" target="_blank" $socialColor="#0077B5">
            <LinkedinLogo size={18}/>
          </AboutSocialMedia>
          <AboutSocialMedia href="https://github.com/pedro-henrique-a-silva" target="_blank" $socialColor="#7232bd">
            <GithubLogo size={18}/>
          </AboutSocialMedia>
        </AboutSocialMediaWrapper>
      </AboutContentWrapper>
    </AboutWrapper> 
  )
}

export default About