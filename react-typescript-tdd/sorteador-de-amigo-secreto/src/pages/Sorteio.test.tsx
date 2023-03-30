import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";
import { Sorteio } from "./Sorteio";



jest.mock('../state/hooks/useListaParticipantes')

jest.mock('../state/hooks/useResultadoSorteio')


describe('Página de sorteio', () => {
    const participantes = [
        'Matheus',
        'Felipe',
        'Ferreira'
    ]

    const resultado = new Map([
        ['Matheus', 'Felipe'],
        ['Felipe', 'Ferreira',],
        ['Ferreira', 'Matheus']
    ])

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
    })


    
    test('escolher quem  irá realizar o sorteio', () => {
        render(<RecoilRoot> <Sorteio/> </RecoilRoot>)

        const opcoes = screen.getAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length)
    })


    test('o amigo secreto é exibido na tela', () => {
        render(<RecoilRoot> <Sorteio/> </RecoilRoot>)

        const selecao = screen.getByPlaceholderText('Selecione o seu nome')

        fireEvent.change(selecao, {
            target: {
                value: participantes[0]
            }
        })

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')
        expect(amigoSecreto).toBeInTheDocument()
    })
})