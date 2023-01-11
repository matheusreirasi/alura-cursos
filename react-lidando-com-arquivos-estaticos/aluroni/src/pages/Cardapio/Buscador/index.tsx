import React, {Dispatch, SetStateAction} from "react"
import styles from "./Buscador.module.scss"
import {CgSearch} from "react-icons/cg"


interface Props {
    busca: string,
    setBusca: Dispatch<SetStateAction<string>>
}

export const Buscador = ({busca, setBusca}: Props) => {
    return (
        <div className={styles.buscador}>
            <input 
                value={busca}
                onChange={evento => setBusca(evento.target.value)}
            />
            <CgSearch
                size={20}
                color="#4c4d5e"
            />

        </div>
    )
}

//Dispatch é uma forma que o React entende que irá ser disparada alguma ação