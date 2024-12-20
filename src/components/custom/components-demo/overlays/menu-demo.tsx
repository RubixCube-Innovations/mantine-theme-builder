import {
    IconArrowsLeftRight,
    IconMessageCircle,
    IconPhoto,
    IconSearch,
    IconSettings,
    IconTrash,
  } from '@tabler/icons-react';
  import { Button, Menu, rem, Text } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';


function DemoMenuItems({ widthRightSection = true, withTarget = true }) {
    const iconProps = { style: { width: rem(14), height: rem(14) } };
  
    return (
      <>
        {withTarget && (
          <Menu.Target>
            <Button>Toggle menu</Button>
          </Menu.Target>
        )}
  
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item leftSection={<IconSettings {...iconProps} />}>Settings</Menu.Item>
          <Menu.Item leftSection={<IconMessageCircle {...iconProps} />}>Messages</Menu.Item>
          <Menu.Item leftSection={<IconPhoto {...iconProps} />}>Gallery</Menu.Item>
          {widthRightSection && (
            <Menu.Item
              leftSection={<IconSearch {...iconProps} />}
              rightSection={
                <Text size="xs" c="dimmed">
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item>
          )}
          <Menu.Divider />
          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item leftSection={<IconArrowsLeftRight {...iconProps} />}>Transfer my data</Menu.Item>
          <Menu.Item color="red" leftSection={<IconTrash {...iconProps} />}>
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </>
    );
  }

const code = `
import { Menu, Button, Text, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu shadow="md" width={200} withinPortal>
      <DemoMenuItems />
    </Menu>
  );
}

export const menuDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
