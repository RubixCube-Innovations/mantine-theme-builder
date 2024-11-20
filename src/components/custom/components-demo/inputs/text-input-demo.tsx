import { TextInput } from '@mantine/core';
import { inputControls } from '../../../../utils/input-controls';
import { MantineDemo } from '../../../mantine/demo';

const code = `
import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <TextInput {...props} placeholder="Input placeholder" />;
}

export const textInputDemo: MantineDemo
 = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
