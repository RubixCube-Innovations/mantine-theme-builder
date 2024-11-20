import { NativeSelect } from "@mantine/core";
import { MantineDemo } from "../../../mantine/demo";
import { inputControls } from "../../../../utils/input-controls";

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
`;

function Wrapper(props: any) {
  return <NativeSelect {...props} data={["React", "Angular", "Vue"]} />;
}

export const nativeSelectDemo: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
