import React from "react"
import Botao from "../Botao/Botao"
import style from "./Formulario.module.scss"
import { ITarefa } from "../../types/tarefas"

import {v4 as uuid} from "uuid"


class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state = {
        tarefa:"",
        tempo:"00:00"
    }

    adicionarTarefa(evento: React.FormEvent <HTMLFormElement>) {
        evento.preventDefault()
        this.props.setTarefas( tarefasAntigas => [...tarefasAntigas, {...this.state, selecionado: false, completado:false, id:uuid()}])
        this.setState({
            tarefa:"",
            tempo: "00:00"
        })//isso faz o formulário ser resetado quando algo é adicionado
    }
    render(): React.ReactNode {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo.
                    </label>
                    <input
                        type="text"   
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>

                <Botao
                    text="Adicionar"
                    type="submit"
                />
            </form>
        )
    }
}

export default Formulario



//htmlFor serve para quando selecionarmos/clicarmos no label, o input (quem possui o id="tarefa" e o id="tempo") seja focado, ou seja, no caso de eu clicar no label relacionado a tarefa, será focado para a box para eu escrever o que quero estudar. 

//Ao invés de usar o hook useState, ele criou um state e passou para dentro do value do input como objeto. Esse state criado antes de render recebe a função setState contida dentro do onChange do input. Ou seja, não preciso criar um array contendo dois valores que recebe o hook useState, posso declarar somente um valor que conterá os dados e depois usar setState contendo a função para atualizar a variável declarada anteriormente. Mesmo usando setState eu tenho que colocar a variável que receberá o resultado da função.

//Na função adicionar tarefa tem que dizer qual o tipo do parâmetro passado dentro da função.

//Dentro da tag form teve que usar a função .bind(this) pois retornava erro "Cannot read properties of undefined", que serve para pegar uma função e unir a outra função, que nesse caso é o this. 

//Aquela forma de usar setTarefas somente passa para dentro dele uma função e essa função retorna um array das tarefas já existentes e a nova