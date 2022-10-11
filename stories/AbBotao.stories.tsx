import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {AbBotao, AbBotaoProps} from '../src'

export default {
  title: 'Componentes/AbBotao',
  component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>


export const Primario = Template.bind({})

Primario.args = {
  texto: 'Bt Primario',
  tipo: 'primario',
  onClick: () =>{alert('Sou um botão primário!!! Me ensine a fazer algo interessante')}
} as AbBotaoProps


export const Secundario = Template.bind({})

Secundario.args = {
  texto: 'Bt secundário',
  tipo: 'secundario',
  onClick: () =>{alert('Sou um botão secundário!!! Me ensine a fazer algo interessante')}
} as AbBotaoProps