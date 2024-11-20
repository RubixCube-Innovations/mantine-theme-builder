import { DateInput } from '@mantine/dates';
import { MantineDemo } from '../../../mantine/demo';
import { inputControls } from '../../../../utils/input-controls';

const code = `
import { DateInput } from '@mantine/dates';


function Demo() {
  return (
    <DateInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <DateInput {...props} placeholder="Input placeholder" />;
}

export const dateInputDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
