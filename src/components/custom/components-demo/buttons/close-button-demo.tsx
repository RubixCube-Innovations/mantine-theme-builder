import { CloseButton } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';

const code = `
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton{{props}} />;
}
`;

function Wrapper(props: any) {
  return <CloseButton {...props} />;
}

export const closeButtonDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    {
      prop: 'variant',
      type: 'segmented',
      data: ['transparent', 'subtle'],
      libraryValue: 'subtle',
      initialValue: 'subtle',
    },
  ],
};
