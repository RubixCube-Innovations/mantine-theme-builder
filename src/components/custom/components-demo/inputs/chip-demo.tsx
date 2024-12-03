import { Chip, ChipProps } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';
import { localStorageTheme } from '../../../../utils/functions';

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
    { prop: 'color', type: 'color', initialValue: localStorageTheme?.color, libraryValue: localStorageTheme?.color },
    {
      prop: 'variant',
      type: 'segmented',
      data: [
        { value: 'filled', label: 'Filled' },
        { value: 'outline', label: 'Outline' },
        { value: 'light', label: 'Light' },
      ],
      initialValue: 'filled',
      libraryValue: 'filled',
    },
    { prop: 'size', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
    { prop: 'radius', type: 'size', initialValue: 'xl', libraryValue: 'xl' },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'checked', type: 'boolean', initialValue: true, libraryValue: false },

  ],
};
