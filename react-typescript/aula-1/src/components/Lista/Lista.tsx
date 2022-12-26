import style from "./Lista.module.scss"
import { ITarefa } from "../../types/tarefas"
import Item from "./Item/Item"


interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Lista = ({tarefas, selecionaTarefa}: Props) => {

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>

            <ul>
                {tarefas.map((item)=>(
                    <Item
                        key={item.id}
                        selecionaTarefa = {selecionaTarefa}
                        {...item}
                    />
                ))}
                
                
            </ul>
        </aside>
    )

}

export default Lista

//O mais recomendável é utilizar um ID dentro de keys. Evitar usar index ou key