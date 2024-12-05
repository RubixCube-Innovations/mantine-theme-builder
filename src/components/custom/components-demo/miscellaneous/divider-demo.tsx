import { Divider, Text } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';
import { localStorageTheme } from '../../../../utils/functions';

const code = `
import { Text, Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider{{props}} my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider{{props}} my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>
    </>
  );
}

`;

function Demo(props: any) {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider {...props} my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider {...props} my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>
    </>
  );
}

export const dividerDemo: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  centered: true,
  maxWidth: 500,
  controls: [
      { prop: 'size', type: 'size', initialValue: 'xs', libraryValue: 'xs' },
      { prop: 'variant', type: 'segmented', data: ['solid', 'dotted', 'dashed'], initialValue: 'solid', libraryValue: 'solid' },
    { prop: 'color', type: 'color', initialValue: localStorageTheme?.color, libraryValue: null },
    { prop: 'label', type: 'string', initialValue: 'Divider label', libraryValue: '' },
    { prop: 'labelPosition', type: 'segmented', data: ['left', 'center', 'right'], initialValue: 'center', libraryValue: 'center' },
  ],
};
