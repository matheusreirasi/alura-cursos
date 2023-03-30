import shuffle from "just-shuffle"

export const realizarSorteio = (participantes: string[]) => {

    const totalParticipantes = participantes.length
    const misturado = shuffle(participantes)
    const resultado = new Map<string, string>()


    for (let i = 0; i < totalParticipantes; i++) {
        const index = i === (totalParticipantes - 1) ? 0 : i+1
        resultado.set(misturado[i], misturado[index])
    }
    return resultado
}


//usar estrutura de listas ligadas para o sorteio
//Map() é uma estrutura de dados key-value que pode ser utilizada utilizando essa função
//.set() é método de new Map()