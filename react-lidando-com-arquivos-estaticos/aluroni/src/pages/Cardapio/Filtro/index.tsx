import {Dispatch, SetStateAction} from "react"
import filtros from "./filtro.json"
import styles from "./Filtro.module.scss"

type IOpcao = typeof filtros[0]//Uma alternativa ao interface

interface Props {
    filtro : number | null
    setFiltro: Dispatch<SetStateAction<number | null>>
}

export const Filtro = ({filtro, setFiltro}:Props) => {

    const selecionarFiltro = (opcao: IOpcao) => {
        if (filtro === opcao.id) return setFiltro(null)
        return setFiltro(opcao.id)
    }

    return (
        <div className = {styles.filtros}>
            {filtros.map((opcao) => (
                <button 
                    className = {
                        `${styles.filtros__filtro}
                        ${filtro === opcao.id ? styles["filtros__filtro--ativo"] : ""}`
                    } 
                    key = {opcao.id}
                    onClick = {() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
  )
}
