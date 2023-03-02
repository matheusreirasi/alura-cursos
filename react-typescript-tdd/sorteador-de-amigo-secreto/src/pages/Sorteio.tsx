import React, { useState } from 'react'
import { useListaParticipantes } from '../state/hooks/useListaParticipantes'
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio'

export const Sorteio = () => {
  const participantes = useListaParticipantes()

  const [participanteAtual, setParticipanteAtual] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const resultado = useResultadoSorteio()

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    resultado.has(participanteAtual) ?? setAmigoSecreto(resultado.get(participanteAtual)!)
  }


  return (
    <div>
      <form onSubmit={sortear}>
        <select
          required
          name="participanteAtual"
          id="participanteAtual"
          placeholder='Selecione o seu nome'
          value={participanteAtual}
          onChange={event => setParticipanteAtual(event.target.value)}
        >
          {participantes.map(participante => <option key={participante}> {participante} </option>)}
        </select>
        <button>
          Sortear!
        </button>
      </form>
        {amigoSecreto && <p role='alert'>{amigoSecreto}</p>}
    </div>
  )
}
