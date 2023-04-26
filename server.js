const express = require('express') /*solicitando o pacote express pra que fique disponivel no codigo*/

const app = express() /*identificador app chamando a função express*/
const porta = 3333  /*constante porta definida*/

function mostraPorta(){
    console.log('Servidor criado e rodando na porta: ', porta)
}

app.listen(porta, mostraPorta)/*Após escutar se a porta 3333 está funcionando, chamanr a função mostraPorta*/ 




/*cls para limpar terminal*/ 
/*node, nome do arquivo e enter para mostrar no terminal*/