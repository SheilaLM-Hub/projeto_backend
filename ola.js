const express = require('express')
const router = express.Router()    /*configurando uma rota*/

const app = express() 
const porta = 3333  

function mostraOla(request, response){ /*a função fará uma requisição e enviará uma resposta quando for solicitada*/
    response.send('Olá, mundo!') /*mostrar no navegador*/

}

function mostraPorta(){
    console.log('Servidor criado e rodando na porta: ', porta)
}

app.use(router.get('/ola', mostraOla)) /*endereço da rota e função a ser chamada*/
app.listen(porta, mostraPorta)