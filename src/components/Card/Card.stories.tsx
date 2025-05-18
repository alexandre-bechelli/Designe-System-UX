import type { Meta, StoryObj } from '@storybook/react';
import Card from './index';

const meta: Meta<typeof Card> = {
  title: 'Componentes/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

const mockRouter = {
  push: (url: string) => console.log(`Mock push para: ${url}`),
  replace: (url: string) => console.log(`Mock replace para: ${url}`),
  prefetch: async () => {},
  back: () => console.log('Mock back'),
  forward: () => console.log('Mock forward'),
  refresh: () => console.log('Mock refresh'),
  pathname: '/',
  query: {},
  asPath: '/',
};

export const Padrao: Story = {
  args: {
    title: 'Suíte Luxo',
    rating: 4,
    router: mockRouter,
  },
};

export const SemAvaliacao: Story = {
  args: {
    title: 'Suíte Simples',
    rating: 0,
    router: mockRouter,
  },
};
