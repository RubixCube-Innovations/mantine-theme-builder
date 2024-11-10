import { Button, Tooltip } from '@mantine/core';
import { MantineDemo } from '../../mantine/demo';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}

export const tooltipDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
