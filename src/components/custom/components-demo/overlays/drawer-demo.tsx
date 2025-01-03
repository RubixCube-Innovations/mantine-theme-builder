import { Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '../../../mantine/demo';
import { AuthenticationForm } from './authentication-form';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

export const drawerDemo: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
