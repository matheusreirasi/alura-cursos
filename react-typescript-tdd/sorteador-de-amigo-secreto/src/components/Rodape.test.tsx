import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Rodape } from "./Rodape";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";

jest.mock('../state/hooks/useListaParticipantes' , () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

jest.mock('../state/hooks/useSorteador.ts', () => {
    return {
        useSorteador: () => mockSorteio
    }
})


describe('Não existem participantes o suficiente', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['Matheus'])
    })

    test('o jogo não pode ser iniciado', () => {
        render(<RecoilRoot> <Rodape/> </RecoilRoot>)

        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()

    })
})


describe('Caso onde há participantes suficientes para o jogo', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['Matheus', 'Felipe', 'Ferreira'])
    })
    
    test('o jogo já pode começar', () => {
        render(<RecoilRoot> <Rodape/> </RecoilRoot>)

        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()

    })

    test('o jogo começou', () => {
        render(<RecoilRoot> <Rodape/> </RecoilRoot>)

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalled()
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})


//Como o teste é o rascunho do arquivo final, ele também tem que ter o comportamento que o arquivo final possua. Como o hook do react useNavigate é uma função e está sendo chamada dentro da função iniciar, eu tenho que fazer esse mesmo comportamento nos testes. Por isso aqui o mock do useNavigate é do tipo função da função de mockNavegacao