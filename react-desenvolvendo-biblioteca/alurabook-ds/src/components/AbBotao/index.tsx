import React from 'react'
import styled from 'styled-components'

const BotaoEstilizado = styled.button`
  background: #EB9B00;
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #b87900
  }
`

export const AbBotao = () => {
  return (
    <BotaoEstilizado>
        Clique Aqui
    </BotaoEstilizado>
  )
}
