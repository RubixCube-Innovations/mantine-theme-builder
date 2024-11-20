import { Textarea } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';
import { inputControls } from '../../../../utils/input-controls';

const code = `
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <Textarea {...props} placeholder="Input placeholder" />;
}

export const textareaDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
