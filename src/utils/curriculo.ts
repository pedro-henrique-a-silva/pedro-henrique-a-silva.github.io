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
       margin-bottom: 20px;
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
       margin-top: 10px;
     }

     .educacao {
       margin-top: 20px;
       max-width: 737px;
     }

     .objetivo {
      max-width: 737px;
     }

     .projetos {
      max-width: 737px;
     }

     .projeto {
      padding: 10px 0;
     }

     .projetos p {
      margin: 5px 0;
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
       margin: 20px 0;
     }
 
     .habilidades td {
       padding: 5px 10px ;
     }
 
     p {
       line-height: 1.5;
     }

     .habilidades-list {
      margin: 5px 0;
     }

     p strong {
        font-weight: 600;
     }

     .formacao {
      margin: 10px 0;
     }

     .curso {
      margin-bottom: 5px;
     }
   </style>
   
   <div class="container" id="content">
     <header>
       <h1 class="nome">Pedro Henrique A Silva</h1>
       <p class="localidade">Ananindeua/PA</p>
       <div class="social">
         <p><a href="https://www.linkedin.com/in/pedro-henrique-a-silva/" target="_blank" rel="noopener noreferrer">linkedin.com/in/pedro-henrique-a-silva</a></p>
         <div class="dot"></div>
         <p><a href="https://github.com/pedro-henrique-a-silva" target="_blank" rel="noopener noreferrer">github.com/pedro-henrique-a-silva</a></p>
       </div>
     </header>
     <main>
       <div class="objetivo">
         <h2 class="titulos">Objetivo</h2>
         <p>
          Desenvolvedor Full-Stack com mais de uma década de experiência em suporte de TI e um ano de experiência em desenvolvimento web.
          busco oportunidades desafiadoras onde possa aplicar meu conhecimento técnico a fim de contribuir para o desenvolvimento de soluções inovadoras.
          Estou determinado a colaborar em equipe, visando alcançar os objetivos da empresa e promover o crescimento mútuo
         </p>
       </div>

       <div class="educacao">
        <h2 class="titulos">Formação</h2>
        <div class="formacao">
         <p class="curso"><strong>Desenvolvimento FullStack</strong> - Trybe</p>
         <p class="descricao-trabalho">
           Uma carga horária de 1.500 horas com foco em Fundamentos do Desenvolvimento Web, Front-End e Back-End em JavaScript, 
           Ciência da Computação em Python, Soft-skills, Metodologias Ágeis, Certificação Eletiva em Java.
         </p>
       </div>
        <div class="formacao">
          <p class="curso"><strong>Análise e Desenvolvimento de sistemas</strong> - Estácio, previsão de término 2026</p>
        </div>
      </div>
 
       <div class="experiencias">
         <h2 class="titulos">Experiência Profissional</h2>
         <div class="experiencia">
           <p class="periodo-trabalho"><strong>Instrução Backend</strong>, Trybe março a junho de 2024</p>
           <p class="descricao-trabalho">
            Conduzi monitorias individuais e coletivas de forma síncrona. 
            Fornecendo suporte e esclarecimento de dúvidas relacionadas a conteúdos e projetos, 
            com foco em back-end e front-end. Abrangendo uma ampla gama de tópicos e tecnologias, 
            incluindo JavaScript/TypeScript com Express.js, React, RTL, Docker, Jest, Mocha, MySQL, Node.js, e Express.
           </p>
         </div>
         <div class="experiencia">
           <p class="periodo-trabalho"><strong>Empreendedor</strong>, Circuito Tecnologia 2016 – 2021</p>
           <p class="descricao-trabalho">
             Manutenção de notebooks, desktops e infraestrutura de rede, gerenciamento de ordens de
             serviço, atendimento ao cliente fornecendo explicações claras evitando jargões técnicos.
           </p>
         </div>
         <div class="experiencia">
           <p class="periodo-trabalho"><strong>Assistente de TI</strong>, Casa do Notebook Franquia junho de 2012 a dezembro de 2015</strong></p>
           <p class="descricao-trabalho">
             Assistência ao serviço de manutenção de notebooks, desktops e infraestrutura de redes,
             elaboração de orçamento e avaliação de equipamentos e serviços.
           </p>
         </div>
       </div>
 
       <div class="certificacoes">
         <h2 class="titulos">Certificações</h2>
         <ul>
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
         <h2 class="titulos">Habilidades</h2>
         
         <P class="habilidades-list"><strong>Front-End:</strong> Reactjs, Angularjs, Redux, ContextAPI, CSS, HTML, TypeScript, Jest, RTL, Styled-components, MaterialUI</P>
         <P class="habilidades-list"><strong>Back-End:</strong> Nodejs, Java, Express, NestJS, Spring Framework, Spring Boot, MySql</P>
         <P class="habilidades-list"><strong>Ferramentas:</strong> Docker, Kubernetes, Git, GitHub</P>
         <P class="habilidades-list"><strong>Outros:</strong> Microsserviços, REST, API Design, Arquitetura em Camadas, SOLID, POO, Agile (Scrum/Kanban)</P>
       </div>

       <div class="projetos">
        <h2 class="titulos">Projetos</h2>
        <div class="projeto">
          <p><strong>App de receita FullStack</strong></p>
          <p>Tecnologias aplicadas: Reactjs, Styled-components, NodeJS, NestJS, Typescript, MySql, Sequelize, Prisma</p>
          <p>
            Esse é um projeto com duas versões de backend utilizando Express e NestJS.
            O projeto também inclui uma aplicação frontend que consome os serviços dos backends 
            para exibir receitas de comidas e bebidas
          </p>
          <p>Link: <a href="https://github.com/pedro-henrique-a-silva/receitas-fullstack" target="_blank">github.com/pedro-henrique-a-silva/receitas-fullstack</a></p>
        </div>
        <div class="projeto">
          <p><strong>Online Store</strong></p>
          <p>Tecnologias aplicadas: Reactjs, Styled-components, Redux, RTL, Testes, Hook, Typescript</p>
          <p>
            Nesse projeto fiz uma recriação de algumas funcionalidades de uma loja online utilizando a API do 
            Mercado Livre. Os usuários podem explorar produtos por categoria ou palavra-chave, 
            adicionar itens ao carrinho de compras e finalizar a compra em uma página de checkout 
            completa. Aqui estão detalhes sobre as tecnologias utilizadas e como aproveitar ao máximo a 
            aplicação
          </p>
          <p>Link: <a href="https://github.com/pedro-henrique-a-silva/online-store" target="_blank">github.com/pedro-henrique-a-silva/online-store</a></p>
        </div>
        <div class="projeto">
          <p><strong>Forum Hub</strong></p>
          <p>Tecnologias aplicadas: Java, Spring, Mysql, Spring Security, Rest, Loombok, Validations, Spring Data JPA </p>
          <p>
            Nesse projeto foi criado uma api rest para um fórum de perguntas e respostas, 
            onde e possível criar um usuário, criar um topico, criar uma resposta e fazer todas as operações de CRUD.
            Tudo isso usando o padrão REST e seguindo as boas práticas de desenvolvimento e segurança.
          </p>
          <p>Link: <a href="https://github.com/pedro-henrique-a-silva/forum-hub-java" target="_blank">github.com/pedro-henrique-a-silva/forum-hub-java</a></p>
        </div>
       </div>
     </main>
     
   </div>
`