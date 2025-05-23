import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { staticVariantsControl } from '../../../../utils/variants-data';
import { MantineDemo } from '../../../mantine/demo';

const code = `
import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Alert{{props}} icon={icon}>
      {{children}}
    </Alert>
  );
}
`;

function Wrapper(props: any) {
  return <Alert icon={<IconInfoCircle />} {...props} />;
}

export const alertDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 400,
  controls: [
    { ...(staticVariantsControl as any), initialValue: 'light', libraryValue: 'light' },
    { type: 'color', prop: 'color', initialValue: '', libraryValue: '' },
    { type: 'size', prop: 'radius', initialValue: 'sm', libraryValue: 'sm' },
    { type: 'boolean', prop: 'withCloseButton', initialValue: false, libraryValue: false },
    { type: 'string', prop: 'title', initialValue: 'Alert title', libraryValue: null },
    {
      type: 'string',
      prop: 'children',
      initialValue:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.',
      libraryValue: null,
    },
  ],
};
