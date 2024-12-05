import { Button } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';
import { interactiveVariantsControl } from '../../../../utils/variants-data';
import { localStorageTheme } from '../../../../utils/functions';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`;

function Wrapper(props: any) {
  return <Button {...props}>Button</Button>;
}

export const buttonDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    interactiveVariantsControl,
    { type: 'color', prop: 'color', initialValue: localStorageTheme?.color, libraryValue: localStorageTheme?.color },
    { type: 'size', prop: 'size', initialValue: 'sm', libraryValue: 'sm' },
    { type: 'size', prop: 'radius', initialValue: 'sm', libraryValue: 'sm' },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'loading', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};