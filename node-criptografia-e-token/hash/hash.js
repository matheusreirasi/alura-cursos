import { createHash } from "crypto"

const criarHash = (senha) => {
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criarHash('uma senha'))

class Usuario {
    constructor(nome, senha){
        this.nome = nome
        this.hash = criarHash(senha)
    }

    autenticacao(nome, senha) {
        if (nome === this.nome && this.hash === criarHash(senha)) {
            console.log('Usuário confirmado')
            return true
        } else {
            console.log('Usuário inválido')
            return false    
    }

    }
}


const usuario = new Usuario('Matheus', 'senha')

console.log(usuario)

usuario.autenticacao('Matheus', 'senha')

usuario.autenticacao('matheus', 'senha')

//digest indica qual formatação será utilizada e creio que geralmente seja utilizada com as funções de  crypto

//quando eu uso o comando node hash.js é retornado para mim o hash que foi criado dentro da função

//a comparação é feita entre os parâmetros passados dentro da função e os parâmetros contidos dentro da const usuarios
