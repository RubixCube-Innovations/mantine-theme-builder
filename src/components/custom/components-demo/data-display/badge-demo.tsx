import { Badge } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';
import { localStorageTheme } from '../../../../utils/functions';

const code = `
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`;

function Wrapper(props: any) {
  return <Badge {...props}>Badge</Badge>;
}

export const badgeDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: 'variant',
      type: 'select',
      initialValue: 'filled',
      libraryValue: 'filled',
      data: ['filled', 'light', 'outline', 'dot', 'transparent', 'default', 'white'],
    },
    { type: 'color', prop: 'color', initialValue: localStorageTheme?.color, libraryValue: localStorageTheme?.color },
    { type: 'size', prop: 'size', initialValue: 'md', libraryValue: 'md' },
    { type: 'size', prop: 'radius', initialValue: 'xl', libraryValue: 'xl' },
  ],
};
