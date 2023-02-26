import React from 'react'
import { useListaParticipantes } from '../state/hooks/useListaParticipantes'
import { useNavigate } from 'react-router-dom'
import './Rodape.css'

export const Rodape = () => {

    const participantes = useListaParticipantes()
    const navegar = useNavigate()

    const iniciar = () => {
        navegar('/sorteio')
    }

  return (
    <footer className='rodape-configuracoes'>
        <button className='botao' disabled={participantes.length < 3} onClick={iniciar}>
            Iniciar brincadeira
        </button>
        <img src='./images/sacolas.png' alt='Sacolas de compras'/>
    </footer>
  )
}
