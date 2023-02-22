import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Formulario } from "./Formulario";



test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<RecoilRoot><Formulario/></RecoilRoot>)

    //encontrar o input no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botão
    const botao = screen.getByRole('button')


    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
})


test('adicionar um participante caso exista um nome preenchido', () => {
    render(<RecoilRoot><Formulario/></RecoilRoot>)

    //encontrar o input no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botão
    const botao = screen.getByRole('button')


    //inserir um valor no input
    fireEvent.change(input, {
        target: {
            value: 'Matheus'
        }
    })

    //clicar no botão de enviar
    fireEvent.click(botao)
    
    //garantir que o input esteja com o foco ativo para poder digitar novamente após o enter
    expect(input).toHaveFocus()

    //garantir que o input não tenha um valor, seja uma string vazia
    expect(input).toHaveValue('')
})


test('nomes duplicados não podem ser adicionados na lista', () => {
    render(<RecoilRoot><Formulario/></RecoilRoot>)

    //encontrar o input no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botão
    const botao = screen.getByRole('button')


    fireEvent.change(input, {
        target: {
            value: 'Matheus'
        }
    })
    fireEvent.click(botao)


    fireEvent.change(input, {
        target: {
            value: 'Matheus'
        }
    })

    fireEvent.click(botao)


    const mensagemErro = screen.getByRole('alert')

    expect(mensagemErro.textContent).toBe('Nomes duplicados não são permitidos')
})


//.toBeInTheDocument() se refere a estar no arquivo tsx