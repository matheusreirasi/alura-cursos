import React, { useState, FormEvent, useRef } from 'react'
import { useAdicionarParticipantes } from '../state/hooks/useAdicionarParticipantes'
import { useMensagemErro } from '../state/hooks/useMensagemErro'
import './Formulario.css'

export const Formulario = () => {
  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipantes()
  const mensagemErro = useMensagemErro()

  const adicionarParticipante = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()

  }

  return (
    <form onSubmit={adicionarParticipante}>
      <div className='grupo-input-btn'>
        <input
          type="text"
          placeholder='Insira os nomes dos participantes'
          onChange={e => setNome(e.target.value)}
          value={nome}
          ref={inputRef}
        />
        <button disabled={!nome}>
          Adicionar
        </button>
      </div>
      {mensagemErro && <p className='alerta erro' role='alert'>{mensagemErro}</p>}
    </form>
  )
}
