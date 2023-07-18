import React, { useState } from 'react'
import { useListaParticipantes } from '../state/hooks/useListaParticipantes'
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio'

export const Sorteio = () => {
  const participantes = useListaParticipantes()
  const resultado = useResultadoSorteio()

  const [participanteAtual, setParticipanteAtual] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')


  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    resultado.has(participanteAtual) ? setAmigoSecreto(resultado.get(participanteAtual)!) : setAmigoSecreto('')
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
          <option>Selecione seu nome</option>
          {participantes.map(participante => <option key={participante}> {participante} </option>)}
        </select>
        <button>
          Sortear!
        </button>
      </form>
        {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </div>
  )
}

//na linha 15 eu tive que usar esse código pq o react retornava errando dizendo que o hook do resultado do sorteio poderia retornar vazio, oq não teria como ocorrer, msm assim foi necessário criar essa regra para poder salvar 