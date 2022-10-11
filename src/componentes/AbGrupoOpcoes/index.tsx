import React, { useState } from "react";
import styled from "styled-components";

export interface AbGrupoOpcao {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}
export interface AbGrupoOpcoesProps {
  opcoes: AbGrupoOpcao[]
  valorPadrao?: AbGrupoOpcao | null;
  onChange?: (opcao : AbGrupoOpcao) => void;
}
const SectionEstilizada = styled.section<{ selecionado: boolean }>`
  width: 194px;
  height: 88px;
  background: ${(props) =>
    props.selecionado === true
      ? "linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)"
      : "#FFFFFF"};
  border: 1px solid;
  border-color: ${(props) =>
    props.selecionado === true ? "#002F52" : "#EB9B00"};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  margin: 10px;
  font-family: sans-serif;
  header {
    color: ${(props) => (props.selecionado === true ? "#FFFFFF" : "#EB9B00")};
    font-size: 12px;
    font-weight: 400;
  }
  strong {
    color: ${(props) => (props.selecionado === true ? "#FFFFFF" : "#EB9B00")};
    font-size: 16px;
    font-weight: 700;
  }
  footer {
    color: ${(props) =>
      props.selecionado === true ? "#FFFFFF" : "rgba(0,0,0,0.54)"};
    font-size: 12px;
    font-weight: 400;
  }
`;

export const AbGrupoOpcoes = ({ opcoes, onChange,valorPadrao }: AbGrupoOpcoesProps) => {
  const [selecao,setSelecao] = useState<AbGrupoOpcao | null> (valorPadrao ?? null)
  const aoSelecionar = (opcao:AbGrupoOpcao) : void => {
    setSelecao(opcao)
    if(onChange){
      onChange(opcao)
    }
  }
  return (
    <>
      {opcoes.map((opcao) => (
        <SectionEstilizada 
          onClick={()=> aoSelecionar(opcao)} 
          key={opcao.id} 
          selecionado={selecao?.id == opcao.id}
        >

          <header>{opcao.titulo}</header>
          <div>
            <strong>{opcao.corpo}</strong>
          </div>
          <footer>{opcao.rodape}</footer>
        </SectionEstilizada>
      ))}
    </>
  );
};
