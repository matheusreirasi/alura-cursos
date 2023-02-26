import { render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import { ListaParticipantes } from "./ListaParticipantes"
import { useListaParticipantes } from "../state/hooks/useListaParticipantes"


jest.mock('../state/hooks/useListaParticipantes' , () => {
    return {
        useListaParticipantes: jest.fn()
    }
})



describe('Lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })//hooks não podem ficar dentro do componente de test

    test('renderiza uma lista sem nomes', () => {
        render(<RecoilRoot> <ListaParticipantes/> </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})



describe('Lista não vazia', () => {
    const participantes = ['Matheus', 'Felipe']

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('lista contendo alguns nomes', () => {

        render(<RecoilRoot> <ListaParticipantes/> </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})
