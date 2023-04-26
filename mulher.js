const express = require('express') 
const router = express.Router()

const app = express() 
const porta = 3333  

function mostraMulher(request, response) {
    response.json({
        nome: 'Sheila Matos',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQEeznxJj1ucZA/profile-displayphoto-shrink_200_200/0/1676508513571?e=1687392000&v=beta&t=teYfjVPf3_MG1FQrf_jUqYx2_4wY0TMdlcrww4AeFv4',
        minibio: 'Estudante de Programação'

    
    }) 
}/*json para enviar varias informações*/

function mostraPorta() {
    console.log('Servidor criado e rodando na porta: ', porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
