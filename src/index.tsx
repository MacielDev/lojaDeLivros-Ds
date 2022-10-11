import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  
  children?: ReactChild;
}

export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export * from './componentes/AbBotao'
export * from './componentes/AbCard'
export * from './componentes/AbGrupoOpcoes'