import { Image } from '@mantine/core';
import { MantineDemo } from '../../mantine/demo';

const code = `
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
`;

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}

export const imageDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
