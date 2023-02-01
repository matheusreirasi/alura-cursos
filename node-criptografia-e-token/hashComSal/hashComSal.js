import { scryptSync, randomBytes, timingSafeEqual} from "crypto"

const criarHashSal = (senha) => {
    const sal = randomBytes(16).toString('hex')

    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex') //numeração representa a quantidade de bits

    return `${sal}:${senhaHasheada}`
}

class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criarHashSal(senha).split(':')
    }

    autenticacao(nome, senha) {
        if (nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64)
            const hashReal = Buffer.from(this.hash, 'hex')
    
            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)
            
            if (hashesCorrespondem) {
                console.log('Usuário autenticado')
                return true
            }
        }

        console.log('Usuário inválido')
        return false
    }
}

const usuario = new Usuario('Matheus', 'outraSenha')

console.log(usuario)

usuario.autenticacao('Matheus', 'outraSenha')
usuario.autenticacao('matheus', 'outraSenha')

//Antes de ter o ponto e vírgula separando cada item do constructor tava dando erro de Cannot create property 'undefined' on string 'Matheus'. Sempre colocar ponto e vírgula no constructor agora