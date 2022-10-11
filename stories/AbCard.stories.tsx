// stories/Card.stories.tsx

import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { AbCard } from '../src/componentes/AbCard'

export default {
  title: 'componentes/Card',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

export const CardComponent = () => {
    return (<AbCard>
        <h1>Olá, eu sou um card</h1>
    </AbCard>)
}