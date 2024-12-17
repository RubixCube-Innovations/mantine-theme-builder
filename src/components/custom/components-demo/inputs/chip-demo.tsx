import { Chip, ChipProps } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';

function Wrapper(props: ChipProps) {
  return (
    <Chip {...props}>
      Awesome chip
    </Chip>
  );
}

const code = `
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip{{props}}>Awesome chip</Chip>
}
`;

export const chipDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: 'color', type: 'color', initialValue: '', libraryValue: '' },
    {
      prop: 'variant',
      type: 'segmented',
      data: [
        { value: 'filled', label: 'Filled' },
        { value: 'outline', label: 'Outline' },
        { value: 'light', label: 'Light' },
      ],
      initialValue: '',
      libraryValue: '',
    },
    { prop: 'size', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
    { prop: 'radius', type: 'size', initialValue: 'xl', libraryValue: 'xl' },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'checked', type: 'boolean', initialValue: true, libraryValue: false },

  ],
};
