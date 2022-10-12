import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbInputQuantidade} from '../src'

export default {
  title: 'Componentes/AbInputQuantidade',
  component: AbInputQuantidade
} as ComponentMeta<typeof AbInputQuantidade>

const Template : ComponentStory<typeof AbInputQuantidade> = () => <AbInputQuantidade />

export const Quantidade = Template.bind({})