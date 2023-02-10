import jwt from "jsonwebtoken"

const mensagemSecreta = 'ninguém verá essa mensagem'

const token = jwt.sign(
    {
        nome: 'Matheus',
        area: 'Segurança com javascript'
    },
    mensagemSecreta
)

console.log(token)


const tokenDecodificado = jwt.verify(token, mensagemSecreta)

console.log(tokenDecodificado)