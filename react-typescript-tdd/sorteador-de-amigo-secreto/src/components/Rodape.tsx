import React from 'react'
import { useListaParticipantes } from '../state/hooks/useListaParticipantes'
import { useNavigate } from 'react-router-dom'
import './Rodape.css'
import { useSorteador } from '../state/hooks/useSorteador'

export const Rodape = () => {

    const participantes = useListaParticipantes()
    const navegar = useNavigate()
    const sortear = useSorteador()

    const iniciar = () => {
      sortear()
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
