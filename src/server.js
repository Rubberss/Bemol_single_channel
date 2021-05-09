const express = require("express");
const server = express()
const rotas = require ('./routs')

//basicamente é um motor que vai me entegar o html puro, junto com meu js
server.set( 'view engine', 'ejs')

//habilta arquivos estaticos
server.use (express.static("public"));

//usar o req.body
server.use(express.urlencoded({extended: true}) )


//habilitar  as rotas
server.use(rotas)

//porta desejada
server.listen(3000, () => console.log('rodando'))
