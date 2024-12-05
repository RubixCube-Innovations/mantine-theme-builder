import { Avatar } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';
import { staticVariantsControl } from '../../../../utils/variants-data';
import { localStorageTheme } from '../../../../utils/functions';

const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`;

export const avatarDemo: MantineDemo = {
  type: 'configurator',
  component: Avatar,
  centered: true,
  code,
  controls: [
    staticVariantsControl,
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: '100%' },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'color', type: 'color', initialValue: localStorageTheme?.color, libraryValue: localStorageTheme?.color },
    {
      prop: 'src',
      type: 'string',
      initialValue: '',
      libraryValue: null,
    },
  ],
};
