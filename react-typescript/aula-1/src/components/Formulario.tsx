import React from "react"
import Botao from "./Botao"


class Formulario extends React.Component{
    render(): React.ReactNode {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo.
                    </label>
                    <input
                        type="text"   
                        name="tarefa" 
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>

                <Botao />
            </form>
        )
    }
}

export default Formulario



//htmlFor serve para quando selecionarmos/clicarmos no label, o input (quem possui o id="tarefa" e o id="tempo") seja focado, ou seja, no caso de eu clicar no label relacionado a tarefa, será focado para a box para eu escrever o que quero estudar. 