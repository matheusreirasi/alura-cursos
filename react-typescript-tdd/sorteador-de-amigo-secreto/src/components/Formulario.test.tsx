import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Formulario } from "./Formulario";

describe('Comportamento do formulário', () => {
    
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
                value: ['Matheus']
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
    
    
    test('mensagem de erro deve desaparecer após determinado tempo', () => {
        jest.useFakeTimers()
        
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
    
    
        let mensagemErro = screen.queryByRole('alert')
        expect(mensagemErro).toBeInTheDocument()
    
        //espera N segundos
        act(() => {
            jest.runAllTimers()
        })
        mensagemErro = screen.queryByRole('alert')
        expect(mensagemErro).toBeNull()
    })
    
    
    //se não for encontrado algo pelo método getByRole o teste automaticamente retornará um erro, já o método queryByRole serve para quando eu quiser procurar algo na tela e mesmo assim não o encontrar, a mensagem de erro não deverá ser disparada
    //mesmo sem o act o teste passava sem problemas, mas mesmo assim era retornada uma mensagem como se tivesse algum erro. Esse erro ocorreu porque sempre que houver uma  atualização de estado no React(nesse caso a mensagem de erro tinha uma string e agora é null), esse estado  que está sendo alterado deve estar dentro de uma função act do testing library
})


