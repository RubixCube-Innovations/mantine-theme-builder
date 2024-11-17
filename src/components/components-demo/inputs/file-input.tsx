import { FileInput } from "@mantine/core";
import { MantineDemo } from "../../mantine/demo";
import { inputControls } from "../../../utils/input-controls";

const code = `
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <FileInput {...props} placeholder="Input placeholder" />;
}

export const fileInputDemo: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
