import { createHash } from "crypto"


class Usuario {
    constructor(nome, senha){
        this.nome = nome
        this.hash = this.criarHash(senha)
    }
    
    criarHash = (senha) => {
        return createHash('sha256').update(senha).digest('hex')
    }

    autenticacao(nome, senha) {
        if (nome === this.nome && this.hash === this.criarHash(senha)) {
            console.log('Usuário confirmado')
            return true
        } else {
            console.log('Usuário inválido')
            return false    
        }

    }
}


const usuario = new Usuario('Matheus', '2341')

for (let senhaTeste=0; senhaTeste < 10000; senhaTeste++) {
    if (usuario.autenticacao('Matheus', senhaTeste.toString())){
        console.log(`Senha é: ${senhaTeste}`)
    }
}