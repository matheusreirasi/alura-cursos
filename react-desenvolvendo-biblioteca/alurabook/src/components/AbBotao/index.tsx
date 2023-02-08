import React from 'react'
import styled, { css } from 'styled-components'

export interface AbBotaoProps {
  texto?: string,
  tipo?: 'primario' | 'secundario',
  onClick?: ()=>void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#fff' : '#EB9B00'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#fff' : '#EB9B00'};
  font-size: 20px;
  cursor: pointer;
  ${(props: AbBotaoProps) => props.tipo === 'primario'
    ? css`
      &:hover {
        background: #b87900,
      }
    `
    : css`
    &:hover {
      background: #b87900,
      color: #b87900
      }
    `
  }
`

export const AbBotao = ({texto, onClick, tipo='primario'}:AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
        {texto}
    </BotaoEstilizado>
  )
}

