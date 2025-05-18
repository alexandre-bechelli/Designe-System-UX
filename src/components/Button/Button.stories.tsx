import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Componentes/Botão',
  component: Button,
  argTypes: {
    onClick: { action: 'clicado' }, // Não precisa implementar o onClick na mão, ele vai logar no painel de ações
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Padrao: Story = {
  args: {
    label: 'Clique Aqui!',
  },
};

export const ComAcao: Story = {
  args: {
    label: 'Clique Aqui!',
    onClick: () => alert('Você clicou!'),
  },
};
