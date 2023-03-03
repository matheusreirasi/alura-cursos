import { realizarSorteio } from "./realizarSorteio"

describe('Em um amigo secreto', () => {
    
    test('cada participante não pode sortear o próprio nome', () => {
        const participantes = [
            'Matheus',
            'Carlos',
            'Ana',
            'João',
            'Bia'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})