import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AuthenticationForm } from './authentication-form';
import { MantineDemo } from '../../../mantine/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export const modalDemo: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
