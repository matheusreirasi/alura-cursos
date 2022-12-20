import React from "react"
import style from "./Lista.module.scss"

const Lista = () => {
    const listaTarefas = [{
        tarefa: "React",
        tempo: "02:00:00"
    }, {
        tarefa: "Javascript",
        tempo: "01:00:00"
    }]


    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>

            <ul>
                {listaTarefas.map((item, key)=>(
                    <li key={key} className={style.item}>
                        <h3>
                            {item.tarefa}
                        </h3>
                        <span>
                            {item.tempo}
                        </span>
                    </li>
                ))}
                
                
            </ul>
        </aside>
    )

}

export default Lista

//O mais recomendável é utilizar um ID dentro de keys. Evitar usar index ou key