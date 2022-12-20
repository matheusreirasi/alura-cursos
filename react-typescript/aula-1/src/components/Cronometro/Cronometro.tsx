import React from 'react'
import Botao from '../Botao/Botao'
import style from './Cronometro.module.scss'

const Cronometro = () => {
  return (
    <div className={style.cronometro}>
        <p  className={style.titulo}>
            Escolha um card e inicie o cronômetro
        </p>
        <div className={style.relogioWrapper}>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </div>
        <Botao 
            text='Começar!'
        />
    </div>
  )
}

export default Cronometro