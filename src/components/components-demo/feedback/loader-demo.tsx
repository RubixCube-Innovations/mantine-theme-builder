import { Loader } from '@mantine/core';
import { MantineDemo } from '../../mantine/demo';

const code = `
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`;

export const loaderDemo: MantineDemo = {
  type: 'configurator',
  component: Loader,
  code,
  centered: true,
  controls: [
    { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null },
    { type: 'size', prop: 'size', initialValue: 'md', libraryValue: 'md' },
    {
      type: 'segmented',
      prop: 'type',
      data: ['oval', 'bars', 'dots'],
      initialValue: 'oval',
      libraryValue: 'oval',
    },
  ],
};
