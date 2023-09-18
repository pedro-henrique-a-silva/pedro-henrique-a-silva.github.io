import { AboutWrapper, ImgProfile, AboutText } from './styles'

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
        </AboutText>
      </AboutWrapper>
  )
}

export default About