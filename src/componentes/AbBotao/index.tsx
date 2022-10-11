import React from 'react'
import styled, { css } from 'styled-components'

export interface AbBotaoProps{
  texto?:string
  tipo?:'primario'|'secundario'
  onClick?: () => void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background:${(props: AbBotaoProps) =>props.tipo === 'primario'? '#E89800': '#FFF'};
  padding: 16px 32px;
  border: 2px solid #E89800;
  color: ${(props : AbBotaoProps) => props.tipo === 'primario'? '#FFF':'#EB9B00'};
  font-size:20px;
  cursor:pointer;
  ${(props : AbBotaoProps) => props.tipo === 'primario'
      ? css`
            &:hover{
              background: #B87900;
              border: 2px solid #B87900;
            }
        `
      :css`
          &:hover{
            background: #FFF;
            border: 2px solid #B87900;
            color:#B87900;
          }
      `
  }
`

export const AbBotao = ({texto,tipo='primario',onClick}:AbBotaoProps) => {
  return(
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  )
}

export default AbBotao