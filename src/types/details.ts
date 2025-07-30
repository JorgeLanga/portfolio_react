// Logo images
import logogradient from "../assets/logo.svg";
import logo from "../assets/logo2.svg";
// Profile Image
import profile from "../assets/profile.jpg";
// Tech stack images
import html from "../assets/techstack/html.png";
import css from "../assets/techstack/css.png";
import js from "../assets/techstack/js.png";
import react from "../assets/techstack/react.png";
import tailwind from "../assets/techstack/tailwind.png";
import bootstrap from "../assets/techstack/bootstrap.png";
import vscode from "../assets/techstack/vscode.png";
import github from "../assets/techstack/github.png";
import git from "../assets/techstack/git.png";
import npm from "../assets/techstack/npm.png";
import postman from "../assets/techstack/postman.png";
import figma from "../assets/techstack/figma.png";
import node from "../assets/techstack/node.png"
import mysql from "../assets/techstack/mysql.png"
import acenternity from "../assets/techstack/aceternity-ui.png"
import vite from "../assets/techstack/vite.jpg"
import shadcn from "../assets/techstack/shadcnui.png"
import magicUi from "../assets/techstack/magicUi.png"
import heroUi from "../assets/techstack/heroUi.png"
import mongoDb from "../assets/techstack/mongoDb.png"
import typescript from "../assets/techstack/typescript.png"
import express from "../assets/techstack/express.png"
// Porject Images
import projectImage1 from "../assets/projects/project1.png";
import projectImage2 from "../assets/projects/project2.png";
import projectImage3 from "../assets/projects/project3.png";
import projectImage4 from "../assets/projects/project4.png";
import projectImage5 from "../assets/projects/project5.png";
import projectImage6 from "../assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

//  Personal Details here
export const personalDetails = {
  name: "Pavan MG",
  tagline: "I build things for web",
  img: profile,
  about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};


export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};


export const workDetails = [
  {
    Position: "Tutor ",
    Company: `Dondzane academy`,
    Location: "Maputo",
    Type: "Laboral",
    Duration: "Sep 2021 - Jun 2025",
  },
  
  {
    Position: "Administrador de registros de Livros",
    Company: `Agencia AlexBarga`,
    Location: "Maputo",
    Type: "Remoto",
    Duration: "Dez 2024 - De Jun 2025",
  },
];


export const eduDetails = [
  {
    Position: "Desenvolvedor Jr. Fullstack",
    Company: "Bytes4future",
    Location: "Maputo, Xipamanine",
    Type: "Bootcamp, PowerUp",
    Duration: "Nov 2024 - Jun 2025",
  },
  {
    Position: "Engenharia em Tecnologias e Sistemas de Informação",
    Company: `Universidade Joaquim Chissano`,
    Location: "Maputo, Zimpeto",
    Type: "Presencial",
    Duration: "Fev 2021 - Present",
  },
];

export const techStackDetails = {
  vite:vite,
  html: html,
  css: css, 
  tailwind: tailwind,
  js: js,
  typscript:typescript,
  react: react,
  node:node,
  mongoDb:mongoDb,
  mysql:mysql,
  express:express,
  bootstrap: bootstrap,
  shadcn:shadcn,
  heroUi:heroUi,
  magicUi:magicUi,
  acenternity:acenternity,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,

};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Ku Thola",
    image: projectImage1,
    description: `Ku Thola é uma solução digital desenvolvida para centralizar, automatizar e otimizar processos de recrutamento de uma organização moçambicana. A aplicação foi desenvolvida durante a Hackathon do programa Bytes4Future e visa tornar os processos seletivos mais eficientes, acessíveis e padronizados.

`,
    techstack: "Tailwind, TypeScript,React js,Node js,Express js e MongoDB",
    previewLink: "https://github.com/JorgeLanga/ku_Thola",
    githubLink: "https://github.com/JorgeLanga/ku_Thola",
  },
  {
    title: "Ma Pilice",
    image: projectImage2,
    description: `Plataforma digital que conecta farmácias moçambicanas, permitindo a venda e compra de medicamentos online de forma simples e segura. O cliente pode pesquisar produtos, comparar preços, fazer encomendas e receber em casa ou levantar na loja. A solução promove o acesso fácil a medicamentos, incentiva o comércio local e moderniza o setor farmacêutico. Tudo num só lugar, com conveniência e confiança.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://www.figma.com/design/gJNzmv4W7lYaNkcmTlyy3V/Components-design?node-id=10-53&p=f&t=3MUbBU4Cl2CzZPo3-0",
    githubLink: "https://github.com/JorgeLanga/",
  },
  {
    title: "Pronto a comer",
    image: projectImage3,
    description: `Plataforma online que reúne restaurantes e cozinhas locais, oferecendo uma variedade de pratos prontos para encomenda e entrega rápida.
Com poucos cliques, o cliente escolhe a refeição, faz o pedido e recebe em casa ou no trabalho.
A solução promove a gastronomia local, apoia pequenos negócios e garante refeições saborosas com praticidade.
Ideal para quem procura comer bem sem perder tempo no dia a dia.



`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://www.figma.com/design/AgvFFazTO7aNjMaMZnkWWr/Untitled?node-id=0-1&p=f&t=iPZkaI7XvG3X9iyO-0",
    githubLink: "https://github.com",
  },
  {
    title: "Spotidados",
    image: projectImage4,
    description: `Aplicação web que apresenta dados do histórico musical de utilizadores do Spotify, de forma simples e interativa.
Permite cadastrar usuários, editar perfis, visualizar estilos musicais e acompanhar o histórico de escuta.
A ferramenta também oferece busca por utilizadores e uma interface moderna e responsiva.
.`,
    techstack: "Tailwind, TypeScript,React",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JorgeLanga/Spotidados",
  },
  {
    title: "Zap Recargas",
    image: projectImage5,
    description: `Protótipo de aplicativo desenvolvido como teste para uma solução de recargas móveis simples e rápida.
A interface permite ao utilizador selecionar a operadora, inserir o número e escolher o valor da recarga.
Focado na praticidade e usabilidade, o design foi pensado para funcionar bem em qualquer dispositivo.
O protótipo demonstra o fluxo básico de recarga e simula a experiência real do usuário.
Criado com ferramentas de prototipagem para apresentar a ideia de forma clara e funcional.
Ideal para testes iniciais e validação de conceito em projetos de serviços digitais.`,
    techstack: "FIGMA",
    previewLink: "https://www.figma.com/design/eRYzIUYh5wC5Q6ietpfbQw/Untitled?node-id=0-1&p=f&t=oIsTE3vScgJVmncN-0",
    githubLink: "https://github.com/JorgeLanga/",
  },
  {
    title: "E-commerce ",
    image: projectImage6,
    description: `Plataforma digital de vendas, permitindo a venda e compra de roupas online de forma simples e segura. O cliente pode pesquisar produtos, comparar preços, fazer encomendas e receber em casa ou levantar na loja. A solução promove o acesso fácil a produtos inimizando o  gasto de tempo dos clientes e a distáncia ate as lojas. Tudo num só lugar, com conveniência e confiança.
    Desenvolvida no ambito do programa Bytes4future como o ultimo projecto, feito e grupos de até 5 elementos valorizando o trabalho em grupo.
    Atráves do mesmo hoje consigo combinar as minhas Hábilidades tecnicas junto com as interpessoais e pessoais.


    `,
    techstack: "Tailwind, TypeScript,React js,Node js,Express js e MongoDB",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Jay-Ubisse/b4f-2-final-project",
  },
];


export const contactDetails = {
  email: "jorgebernardolanga@gmail.com",
  phone: "+258 87 3559 810",
};