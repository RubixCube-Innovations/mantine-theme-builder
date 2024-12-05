import { IconAdjustments } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';
import { interactiveVariantsControl } from '../../../../utils/variants-data';
import { localStorageTheme } from '../../../../utils/functions';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon{{props}} aria-label="Settings">
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  );
}
`;

function Wrapper(props: any) {
  return (
    <ActionIcon {...props} aria-label="Settings">
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  );
}

export const actionIconDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    interactiveVariantsControl,
    { prop: 'color', type: 'color', initialValue: localStorageTheme?.color, libraryValue: localStorageTheme?.color },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
  ],
};
