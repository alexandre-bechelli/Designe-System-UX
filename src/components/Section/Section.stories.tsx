import type { Meta, StoryObj } from '@storybook/react';
import Section from './index';
import React from 'react';

const meta: Meta<typeof Section> = {
  title: 'Componentes/Section',
  component: Section,
  argTypes: {
    id: { control: 'text' },
    className: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Padrao: Story = {
  args: {
    id: 'secao-principal',
    className: 'bg-gray-800 p-8',
    children: 'Conteúdo da Seção',
  },
};

export const ComConteudoPersonalizado: Story = {
  args: {
    id: 'secao-destaque',
    className: 'bg-blue-600 p-8 text-white',
    children: (
      <div>
        <h2>Bem-vindo à Seção de Destaque!</h2>
        <p>Esta é uma seção com conteúdo para o storybook.</p>
      </div>
    ),
  },
};
