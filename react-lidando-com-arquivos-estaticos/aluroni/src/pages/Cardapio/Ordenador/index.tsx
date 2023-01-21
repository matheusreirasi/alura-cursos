import React, { useState, Dispatch, SetStateAction } from 'react'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md"
import styles from "./Ordenador.module.scss"
import opcoes from "./opcoes.json"

interface Props {
    ordenador: string,
    setOrdenador: Dispatch<SetStateAction<string>>
}

export const Ordenador = ({ordenador, setOrdenador}:Props) => {

    const [aberto, setAberto] = useState(false)
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome

  return (
    <button
        className={`
            ${styles.ordenador}
            ${ordenador !== "" ? styles["ordenador--ativo"] : ""}    
        `}
        onClick={() => setAberto(!aberto)}
        onBlur={() => setAberto(false)}
    >
        <span>
            {nomeOrdenador || "Ordenar por"}
        </span>
        {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
        <div className={`
                        ${styles.ordenador__options}
                        ${aberto ? styles["ordenador__options--ativo"] : ""}
                        `}
        >
            {opcoes.map((opcao) => (
                <div
                    className={styles.ordenador__option}
                    key={opcao.value}
                    onClick={() => setOrdenador(opcao.value)}
                >
                    {opcao.nome}
                </div>
            ))}
        </div>
    </button>
  )
}
