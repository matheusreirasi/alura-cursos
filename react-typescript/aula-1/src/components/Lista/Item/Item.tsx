import { ITarefa } from "../../../types/tarefas";
import style from "./Item.module.scss"

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada:ITarefa) => void
}

const Item = ({tarefa, tempo, selecionado, completado, id, selecionaTarefa}:Props)=> {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={()=> selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}

export default Item