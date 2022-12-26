import React from "react";
import style from "./Botao.module.scss"

class Botao extends React.Component <{text: string, type?: "button" | "submit" | "reset" | undefined}> {
    render(): React.ReactNode { //Não tem React.ReactNode no vídeo da aula, somente o render()
        const { type = "button"} = this.props
        return(
            <button type = {type} className={style.botao}>
                {this.props.text}
            </button>
        )
    }
}

export default Botao

//Props funciona como atributos. Eu tenho que estabelecer as props na classe que lida com as interações, nesse caso é o botão.

//Primeiro eu especifico os props que farão parte da classe (nesse caso são as props do botão) e depois digo onde essa props irá aparecer(dentro da tag button). Desse jeito, sempre que eu usar esse componente em outra parte do meu código eu só preciso colocar "text='Adicionar'" no local do botão onde ele será inserido

//Se nenhum tipo for passado para o botão então ele será to tipo button