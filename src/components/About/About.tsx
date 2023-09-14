import { AboutWrapper, ImgProfile, AboutText } from './styles'

function About() {
  return (
      <AboutWrapper>
        <ImgProfile> 
          <img src="https://github.com/pedro-henrique-a-silva.png" alt=""/>
        </ImgProfile>    
        <AboutText >
          <p >Full Stack Deveveloper</p>
          <h1 >Dev Pedro</h1>
          <p >Estudante de desenvolvimento Web na Instituição de ensino Trybe, e apaixonado por tecnologia desde criança, estou aprimorando cada dia mais minhas habilidades como desenvolvedor.</p>
        </AboutText>
      </AboutWrapper>
  )
}

export default About