import React from "react"

const Lista = () => {
    const listaTarefas = [{
        tarefa: "React",
        tempo: "02:00:00"
    }, {
        tarefa: "Javascript",
        tempo: "01:00:00"
    }]


    return (
        <aside>
            <h2> Estudos do dia </h2>

            <ul>
                {listaTarefas.map((item, key)=>(
                    <li key={key}>
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