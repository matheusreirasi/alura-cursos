import {generateKeyPairSync, publicEncrypt, privateDecrypt} from "crypto"

const {privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
})

//console.log(publicKey)
//console.log(privateKey)


const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from('Essa é a senha')
) //essa função precisa da chave pública e da mensagem que será enviada.

console.log(dadosCriptografados.toString('hex'))


const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(dadosDecifrados.toString('utf-8')) //se não passar para string irá retornar o local de memória do buffer que está armazenada a mensagem

//https://cursos.alura.com.br/course/nodejs-criptografia-tokens-jwt/task/107370 