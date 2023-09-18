import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AboutWrapper, ImgProfile, AboutText, SocialMedia } from './styles'

function About() {
  return (
      <AboutWrapper>
        <ImgProfile> 
          <img src="https://github.com/pedro-henrique-a-silva.png" alt=""/>
        </ImgProfile>    
        <AboutText >
          <h1>Olá. </h1>
          <h2>Me chamo Pedro Silva</h2>
          <p>Full Stack Deveveloper</p>
          <p>
            Sou um desenvolvedor Web FullStack, atualmente em transição de carreira.
            Buscando pela primeira oportunidade de mostras minhas habilidades e conhecimentos com desenvolvedor.
          </p>
          <SocialMedia>
            <a href="https://github.com/pedro-henrique-a-silva" target="_blank">
              <GithubLogo size={28} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/in/pedro-henrique-a-silva/" target="_blank">
              <LinkedinLogo size={28} weight="fill" />
            </a>
          </SocialMedia>
        </AboutText>
      </AboutWrapper>
  )
}

export default About