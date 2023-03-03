import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})

export const resultadoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoAmigoSecreto',
    default: new Map()
})

//esse atom é uma pequena porção do estado que posteriormente eu posso passar para uma função que lida com estados como useState(listaParticipantesState)