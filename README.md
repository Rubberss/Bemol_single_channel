<h1 align="center">
  Bemol - Single Channel
</h1>


<p align="center">
 <img src="https://github.com/Rubberss/Bemol_single_channel/blob/06028dee512692da776311ec827d939bedb2fe57/public/images/tela.png" alt="PRs welcome!" />
</p>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- NodeJS
- EJS
- Express

## 💻 Projeto

A ideia do sistema é:

"Apresentar os principais canais de comunicação da Bemol".

## 🔖 Começando

### Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico para executar uma Aplicação Web, que pode ser encontrado aqui.

Além disso, você precisará do servidor executando localmente em sua máquina com os dados fictícios. Você pode encontrar o servidor e todas as instruções para iniciá-lo aqui.

- Baixe o Repositório
  
```
https://github.com/Rubberss/Bemol_single_channel
```
  
  - Conectando o aplicativo Web ao servidor

1 - Baixe o Node.js

é um software de código aberto, multiplataforma, que executa códigos JavaScript no backend/servidor e frontend/interface, baseado no V8 interpretador de JavaScript

2 - Baixe Visual Studio Code

Abra o projeto utilizando VSC
logo em seguida abra o terminal com o atalho Ctrl + Shift + P
digite os seguintes comandos no passo 3

3- Pacotes necessários para executar o sistema

siga os seguintes passos de comandos em sequência:

```
npm init -y
```

```
npm i express
```

```
npm i nodemon -D
```

```
npm i ejs
```

4 - Alterações no Package

Abra seu arquivo package.json e altere as seguintes linhas:


```
"main": "index.js" para "main": "src/server.js"
```
e
```
"dev": "echo \"Error: no test specified\" && exit 1" para  "dev": "nodemon ."
```


5 - Execute o Projeto

No mesmo terminal digite:

```
node  src/server.js
```

Abra seu navegador e digite o seguinte endereço:

http://localhost:3000/


**OBS.:**   Este metodo é opcional, tendo outros meios de instalação.


---

## Diagramas C4 Model

### Diagrama de Contexto
Este é um diagrama de contexto da Aplicação Web BeSell fictício, mostrando uma visão geral da primeira camada de interação do cliente, e depois a segunda camada técnica do sistema.

![D_C1](https://github.com/Rubberss/Bemol_single_channel/blob/1a7aaeaf0a4561d93ddd759acac977346e3ce567/c4-model/C4-model.png)


---

Feito com ♥ by Rubber Rodriguez
