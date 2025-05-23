import { Avatar } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';
import { staticVariantsControl } from '../../../../utils/variants-data';

const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`;

export const avatarDemo: MantineDemo = {
  type: "configurator",
  component: Avatar,
  centered: true,
  code,
  controls: [
    { ...(staticVariantsControl as any), initialValue: 'light', libraryValue: 'light' },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "100%" },
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    { prop: "color", type: "color", initialValue: "", libraryValue: "" },
  ],
};
