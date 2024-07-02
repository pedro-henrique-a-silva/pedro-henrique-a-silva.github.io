export const element = document.createElement('div');
element.innerHTML =`
<style>
   *, 
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: black;
    }

    .body {
      font-family: 'Poppins', sans-serif;
      background-color: #f5f5f5;
      width: 100vw;
    }

    .container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 20px;
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .nome {
      font-weight: 500;
      font-size: 2rem;
    }

    .localidade {
      font-size: 0.9rem;
    }

    .social {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .social p {
      font-size: 0.9rem;
    }

    .dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: black;
      margin: 0 10px;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-top: 20px;
    }

    .titulos {
      font-weight: 600;
      text-decoration: underline;
      margin-bottom: 10px;
    }

    .experiencias {
      max-width: 737px;
      margin-top: 20px;
    }

    .local-trabalho {
      font-weight: 600;
      font-size: 1.2rem;
      margin: 10px 0;
    }


    .instituicao {
      font-weight: 600;
      font-size: 1.2rem;
      margin: 10px 0;
    }

    .periodo-trabalho {
      margin-bottom: 10px;
    }

    .educacao {
      margin-top: 20px;
    }

    .certificacoes {
      margin-top: 20px;
    }

    .certificacoes ul {
      list-style: none;
    }

    .certificacoes li {
      margin: 5px 0;
    }

    .habilidades {
      margin-top: 20px;
    }

    .habilidades td {
      padding: 5px 10px ;
    }

    p {
      line-height: 1.5;
    }
  </style>
  
  <div class="container" id="content">
    <header>
      <h1 class="nome">Pedro Henrique A Silva</h1>
      <p class="localidade">Ananindeua/PA</p>
      <div class="social">
        <p>linkedin.com/in/pedro-henrique-a-silva</p>
        <div class="dot"></div>
        <p>github.com/pedro-henrique-a-silva</p>
      </div>
    </header>
    <main>
      <div class="objetivo">
        <h2 class="titulos">Objetivos</h2>
        <p>Possuo mais de 10 anos de experiência na área de tecnologia, e pretendo atuar como 
          desenvolvedora web full stack
        </p>
      </div>

      <div class="experiencias">
        <h2 class="titulos">EXPERIÊNCIA PROFISSIONAL</h2>
        <div class="experiencia">
          <p class="local-trabalho">Trybe, Remoto</p>
          <p class="periodo-trabalho">Instrução Backend, 03/2024 – 06/2024</p>
          <p class="descricao-trabalho">
            Responsável por realizar monitorias técnicas individuais e coletivas, revisão de conteúdo de
            forma síncrona e suporte por Slack para resolução de dúvidas. Os conteúdos abordados para
            monitoria e revisão incluem: JAVASCRIPT e testes automatizados com Jest. Front-end
            passando por REACT e REDUX. Back-end abordando tecnologias como Mongo, SQL e NODEJS
            e o módulo de Ciências da Computação.
          </p>
        </div>
        <div class="experiencia">
          <p class="local-trabalho">CIRCUITO TECNOLOGIA, Parauapebas, Pará</p>
          <p class="periodo-trabalho">Empreendedor, 2016 – 2021</p>
          <p class="descricao-trabalho">
            Manutenção de notebooks, desktops e infraestrutura de rede, gerenciamento de ordens de
            serviço, atendimento ao cliente fornecendo explicações claras evitando jargões técnicos.
          </p>
        </div>
        <div class="experiencia">
          <p class="local-trabalho">Casa do Notebook Franquia, Parauapebas, Pará</p>
          <p class="periodo-trabalho">ASSISTENTE DE TI, 06/2012 – 12/2015</p>
          <p class="descricao-trabalho">
            Assistência ao serviço de manutenção de notebooks, desktops e infraestrutura de redes,
            elaboração de orçamento e avaliação de equipamentos e serviços.
          </p>
        </div>
      </div>

      <div class="educacao">
        <h2 class="titulos">EDUCAÇÃO</h2>
        <div class="formacao">
          <p class="instituicao">Estácio</p>
          <p class="curso">Tecnólogo em Análise e Desenvolvimento de sistemas, previsão de término 2026</p>
        </div>
      </div>

      <div class="certificacoes">
        <h2 class="titulos">CERTIFICAÇÕES</h2>
        <ul>
          <li>Trybe - Desenvolvimento web FullStack – 1.500 horas (04/2024)</li>
          <li>Alura - Aprenda a Programar em Java com Orientação a Objetos – 39 horas (04/2024)</li>
          <li>Alura - Formação Java e Spring Framework – 106 horas (06/2024)</li>
          <li>Alura - Formação Explore o Framework Angular – 56 horas (03/2024)</li>
          <li>Alura - Microserviços e padrões de projeto – 6 horas (03/2024)</li>
          <li>Alura – Kubernates: Pods, Services e ConfigMaps 8 horas (03/2024)</li>
          <li>Alura - Gestão Agíl: Explorando conceitos de agilidade 8 horas (03/2024)</li>
        </ul>
      </div>

      <div class="html2pdf__page-break"></div>

      <div class="habilidades">
        <h2 class="titulos">HABILIDADES</h2>
        <table>
          <tr>
            <td>Java</td>
            <td>Spring Framework</td>
            <td>Spring Boot</td>
            <td>Hibernates</td>
          </tr>
          <tr>
            <td>NodeJS</td>
            <td>ExpressJS</td>
            <td>NestJS</td>
            <td>RabbitMQ</td>
          </tr>
          <tr>
            <td>PrismaORM</td>
            <td>SequelizeORM</td>
            <td>Typescript</td>
            <td>Testes</td>
          </tr>
          <tr>
            <td>Docker</td>
            <td>Git</td>
            <td>CI/CD</td>
            <td>API Rest</td>
          </tr>
          <tr>
            <td>Microserviços</td>
            <td>MySQL</td>
            <td>React</td>
            <td>Styled-Components</td>
          </tr>
          <tr>
            <td>Redux</td>
            <td>Postgress</td>
            <td>Context API</td>
          </tr>
        </table>
      </div>
    </main>
    
  </div>
`