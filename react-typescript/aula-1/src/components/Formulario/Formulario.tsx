import React, {useState} from "react"
import Botao from "../Botao/Botao"
import style from "./Formulario.module.scss"
import { ITarefa } from "../../types/tarefas"

import {v4 as uuid} from "uuid"

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Formulario = ({setTarefas}: Props) => {

    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00:00")

    const adicionarTarefa = (evento: React.FormEvent <HTMLFormElement>) => {
        evento.preventDefault()
        setTarefas( tarefasAntigas => [...tarefasAntigas,
            {
                tarefa,
                tempo,
                selecionado: false,
                completado:false,
                id:uuid()
            }
        ])
        setTarefa("")
        setTempo("00:00:00") //isso faz o formulário ser resetado quando algo é adicionado
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo.
                </label>
                <input
                    type="text"   
                    name="tarefa"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
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
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
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



export default Formulario



//htmlFor serve para quando selecionarmos/clicarmos no label, o input (quem possui o id="tarefa" e o id="tempo") seja focado, ou seja, no caso de eu clicar no label relacionado a tarefa, será focado para a box para eu escrever o que quero estudar. 

//Ao invés de usar o hook useState, ele criou um state e passou para dentro do value do input como objeto. Esse state criado antes de render recebe a função setState contida dentro do onChange do input. Ou seja, não preciso criar um array contendo dois valores que recebe o hook useState, posso declarar somente um valor que conterá os dados e depois usar setState contendo a função para atualizar a variável declarada anteriormente. Mesmo usando setState eu tenho que colocar a variável que receberá o resultado da função.

//Na função adicionar tarefa tem que dizer qual o tipo do parâmetro passado dentro da função.

//Dentro da tag form teve que usar a função .bind(this) pois retornava erro "Cannot read properties of undefined", que serve para pegar uma função e unir a outra função, que nesse caso é o this. 

//Aquela forma de usar setTarefas somente passa para dentro dele uma função e essa função retorna um array das tarefas já existentes e a nova