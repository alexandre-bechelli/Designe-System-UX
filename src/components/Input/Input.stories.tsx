import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';
import React, { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Componentes/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'radio',
      options: ['text', 'password'],
    },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    onChange: { action: 'alterado' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

// Cria um wrapper para controlar o estado do Input no Storybook
const Template = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e); // Aciona o action logger do Storybook
      }}
    />
  );
};

export const TextoPadrao: Story = {
  render: Template,
  args: {
    type: 'text',
    value: '',
    placeholder: 'Digite seu texto...',
  },
};

export const Senha: Story = {
  render: Template,
  args: {
    type: 'password',
    value: '',
    placeholder: 'Digite sua senha...',
  },
};
