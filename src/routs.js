// express é uma biblioteca pra criar o servidor
const express = require('express');

//criando os caminhos atraves das rotas
const rotas = express.Router()

//view vai achar minha meu caminho base
const views = __dirname + '/views/'

const Profile = {
    data: 
    {
    name2: "ChatBot",
    name: "Whatsapp",
    name3: "Site Oficial",
    avatar: "https://static.bemol.com.br/images/chatbot/BOB-ICON1.png",
    avatar2: "https://media-exp1.licdn.com/dms/image/C4D0BAQEUwJZ-zBaZsQ/company-logo_200_200/0/1520394059179?e=1628726400&v=beta&t=VRRlmDP6iTyqpGTX_ZmOn19LLgLFtIFusQnvqOixO8E",
    avatar3: "https://media-exp1.licdn.com/dms/image/C4D0BAQHvIOf_33y2cQ/company-logo_200_200/0/1565296345125?e=1628726400&v=beta&t=2kH8ynTyOnrGLQWxm1F1tHny_siC299pk3hzxwe4zw8",

    },

    controlador: {
        index( req, res){
           return  res.render(views + "profile", { profile:Profile.data})
        }

    }
}
//refatorando

//meu controlador é como se fosse minhas funcionalidades, gerenciando elas pra eu mandar pra minhas rotas
 //pedido e resposta
rotas.get('/', ( req, res) => { res.render(views + "index")} )
//aqui onde eu envio meus dados do dos canais
rotas.get('/profile', Profile.controlador.index )
//aqui onde eu envio meus dados, porem mantenho na mesma pagina











//ele exporta minhas "rotas" pra paginas server.js, é basicamente um include
 module.exports = rotas;