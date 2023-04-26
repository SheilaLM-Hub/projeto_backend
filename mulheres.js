const express = require('express')
const router = express.Router()
const app = express() 
const porta = 3333  

const mulheres = [{ /*armazenando lista em uma constante*/
    nome: 'Sheila Matos',
    imagem: 'https://media.licdn.com/dms/image/D4D03AQEeznxJj1ucZA/profile-displayphoto-shrink_200_200/0/1676508513571?e=1687392000&v=beta&t=teYfjVPf3_MG1FQrf_jUqYx2_4wY0TMdlcrww4AeFv4',
    minibio: 'Estudante de Programação'

},

{
    nome: 'Iana Chan',
    imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.linkedin.com%2Fin%2Fianachan&psig=AOvVaw1nMhjnmAV55beB68khuXYZ&ust=1681942938002000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCT7Ou7tP4CFQAAAAAdAAAAABAE ',
    minibio:'Fundadora da Programaria'
},

{
    nome: 'Nina da Hora',
    imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgq.globo.com%2FTecnologia%2Fnoticia%2F2021%2F05%2Fnina-da-hora-cientista-preconceito.html&psig=AOvVaw1UqBIG3_ogZKfdahv5VVWf&ust=1681943038998000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiJ-Zu8tP4CFQAAAAAdAAAAABAE',
    minibio: ' Hacker antirracista'
}]

function mostraMulheres(request, response) {
    response.json(mulheres) 
}

function mostraPorta(){
    console.log('Servidor criado e rodando na porta: ', porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)