import {createCipheriv, randomBytes, createDecipheriv} from "crypto"

const mensagem = 'Essa mensagem é secreta'
const chave = randomBytes(32)
const vi = randomBytes(16) //vi quer dizer vetor de inicialização, isso que quer dizer o iv no final de createCipheriv

const cifra = createCipheriv('aes256', chave, vi)
const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex')

console.log(mensagemCifrada)


const decifra = createDecipheriv('aes256', chave, vi)
const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8')

console.log(mensagemDecifrada)