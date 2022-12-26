import React, { useEffect, useState } from 'react'
import Botao from '../Botao/Botao'
import style from './Cronometro.module.scss'
import { ITarefa } from '../../types/tarefas'
import tempoParaSegundos from '../../utils/time'

interface Props {
  selecionado: ITarefa | undefined
}

const Cronometro = ({selecionado}: Props) => {
  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
    setTempo(tempoParaSegundos(String(selecionado?.tempo)))
  }, [selecionado])

  const minutos = Math.floor(Number(tempo) / 60)
  const segundos = Number(tempo) % 60
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0")
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0")

  return (
    <div className={style.cronometro}>
        <p  className={style.titulo}>
            Escolha um card e inicie o cronômetro
        </p>
        Tempo: {tempo}
        <div className={style.relogioWrapper}>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </div>
        <Botao 
            text='Começar!'
        />
    </div>
  )
}

export default Cronometro


//Teve que passar "selecionado?.tempo" pq if não aceita condições undefined, então o interrogação obriga a retornar um number ao invés de undefined

//Type 'string' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher. Quando eu desestruturei String(minutos) para tratar minutos como um array de char, o typescript retornou esse erro.

//A função padStart serviu para eu renderizar a string "0" quando eu não tiver a cadeia de strings completa com todos os valores necessários. Isso ocorre quando eu coloco no tempo de estudos 1 hora por exemplo. Quando isso acontece é mostrado na tela somente 1 e após ele e antes do dois pontos fica um nada, simplesmente vazio.