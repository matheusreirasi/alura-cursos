import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})

//esse atom é uma pequena porção do estado que posteriormente eu posso passar para uma função que lida com estados como useState(listaParticipantesState)