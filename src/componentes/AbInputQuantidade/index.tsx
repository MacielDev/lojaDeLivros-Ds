import React, { useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display:flex;
  flex-direction:column;
  max-width:150px;
  align-items: center;
`
const Contador = styled.div`
  color:#002F52;
`
const ContainerComandos = styled.div`
  width: 78%;
  display:flex;
  justify-content:space-around;
  margin-top:10px;
  align-items:center;
  padding:4px 4px;
`
const BotaoComandos = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:100%;
  border: none;
  width:24px;
  height:24px;
  background: #002F52;
  color:#FFFFFF;
  font-size:16px;
  font-weight:500;
`
const ScoreDisplay = styled.span`
  color:#002F52;
  font-size:16px;
  font-weight:300;
`
export const AbInputQuantidade = () => {
  const [valor,setValor] = useState<number>(1)
  const handleSub = () => {
    if(valor>1) setValor(valor-1)
  }
  const handleAdd = () => {
    setValor(valor+1)
  }
  return (
    <Container>
      <Contador>Quantidade</Contador>
      <ContainerComandos>
        <BotaoComandos onClick={() => handleSub()}>-</BotaoComandos>
        <ScoreDisplay>{valor}</ScoreDisplay>
        <BotaoComandos onClick={() => handleAdd()}>+</BotaoComandos>
      </ContainerComandos>
    </Container>
  )
}